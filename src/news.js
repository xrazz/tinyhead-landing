import { timingSafeEqual } from 'node:crypto';
import postgres from 'postgres';

const MAX_STORIES = 100;
const MAX_TEXT_LENGTH = 10_000;

let sql;
let schemaReady;

function getSql() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set');
  }

  sql ??= postgres(process.env.DATABASE_URL, {
    max: 3,
    ssl: process.env.DATABASE_SSL === 'disable' ? false : 'require',
  });

  return sql;
}

async function ensureSchema() {
  if (!schemaReady) {
    schemaReady = getSql()`
      CREATE TABLE IF NOT EXISTS hacker_news_stories (
        id BIGSERIAL PRIMARY KEY,
        rank INTEGER NOT NULL,
        headline TEXT NOT NULL,
        summary TEXT NOT NULL DEFAULT '',
        points INTEGER,
        article_url TEXT,
        hn_url TEXT NOT NULL,
        source TEXT NOT NULL DEFAULT 'hacker-news',
        generated_at TIMESTAMPTZ NOT NULL,
        ingested_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        UNIQUE (hn_url)
      )
    `;
  }

  await schemaReady;
}

function asText(value) {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > MAX_TEXT_LENGTH) return null;
  return trimmed;
}

function asOptionalText(value) {
  if (value === undefined || value === null || value === '') return null;
  return asText(value);
}

function asInteger(value) {
  if (typeof value === 'number' && Number.isInteger(value)) return value;
  if (typeof value === 'string' && /^-?\d+$/.test(value.trim())) return Number(value);
  return null;
}

function asOptionalInteger(value) {
  if (value === undefined || value === null || value === '') return null;
  return asInteger(value);
}

function asUrl(value) {
  const text = asText(value);
  if (!text) return null;

  try {
    const url = new URL(text);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
    return url.toString();
  } catch {
    return null;
  }
}

function asOptionalUrl(value) {
  if (value === undefined || value === null || value === '') return null;
  return asUrl(value);
}

function asTimestamp(value) {
  if (value === undefined || value === null || value === '') return new Date();
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date;
}

function storyHeadline(story) {
  return asText(story.headline ?? story.title);
}

function storyArticleUrl(story) {
  return asOptionalUrl(story.article_url ?? story.articleUrl ?? story.url);
}

function storyHnUrl(story) {
  const directUrl = asOptionalUrl(story.hn_url ?? story.hnUrl ?? story.hackerNewsUrl);
  if (directUrl) return directUrl;

  const itemId = asOptionalInteger(story.hn_id ?? story.hnId ?? story.item_id ?? story.itemId ?? story.id);
  if (itemId === null) return null;
  return `https://news.ycombinator.com/item?id=${itemId}`;
}

export function hasValidNewsAuth(request) {
  const expectedSecret = process.env.LYZR_WEBHOOK_SECRET;
  if (!expectedSecret) return false;

  const authorization = request.headers.authorization;
  if (!authorization || typeof authorization !== 'string') return false;

  const [scheme, token] = authorization.split(' ');
  if (scheme !== 'Bearer' || !token) return false;

  const expected = Buffer.from(expectedSecret);
  const received = Buffer.from(token);
  return expected.length === received.length && timingSafeEqual(expected, received);
}

export function validateNewsPayload(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { ok: false, error: 'Payload must be a JSON object.' };
  }

  if (!Array.isArray(payload.stories)) {
    return { ok: false, error: 'Payload must include a stories array.' };
  }

  if (payload.stories.length === 0 || payload.stories.length > MAX_STORIES) {
    return { ok: false, error: `stories must contain between 1 and ${MAX_STORIES} items.` };
  }

  const generatedAt = asTimestamp(payload.generated_at ?? payload.generatedAt);
  if (!generatedAt) {
    return { ok: false, error: 'generated_at must be a valid timestamp when provided.' };
  }

  const stories = [];

  for (const [index, rawStory] of payload.stories.entries()) {
    if (!rawStory || typeof rawStory !== 'object' || Array.isArray(rawStory)) {
      return { ok: false, error: `stories[${index}] must be an object.` };
    }

    const rank = asInteger(rawStory.rank);
    const headline = storyHeadline(rawStory);
    const summary = asOptionalText(rawStory.summary) ?? '';
    const points = asOptionalInteger(rawStory.points);
    const articleUrl = storyArticleUrl(rawStory);
    const hnUrl = storyHnUrl(rawStory);
    const generatedAtForStory = asTimestamp(rawStory.generated_at ?? rawStory.generatedAt ?? generatedAt);
    const source = asOptionalText(rawStory.source) ?? asOptionalText(payload.source) ?? 'hacker-news';

    if (rank === null || rank < 1) {
      return { ok: false, error: `stories[${index}].rank must be a positive integer.` };
    }

    if (!headline) {
      return { ok: false, error: `stories[${index}] must include headline or title.` };
    }

    if (!hnUrl) {
      return { ok: false, error: `stories[${index}] must include hn_url or a Hacker News item id.` };
    }

    if (points !== null && points < 0) {
      return { ok: false, error: `stories[${index}].points must be zero or greater when provided.` };
    }

    if (!generatedAtForStory) {
      return { ok: false, error: `stories[${index}].generated_at must be a valid timestamp when provided.` };
    }

    stories.push({
      rank,
      headline,
      summary,
      points,
      articleUrl,
      hnUrl,
      source,
      generatedAt: generatedAtForStory,
    });
  }

  return { ok: true, stories };
}

export async function storeNewsStories(stories) {
  await ensureSchema();

  const rows = await getSql().begin(async (tx) => {
    const stored = [];

    for (const story of stories) {
      const [row] = await tx`
        INSERT INTO hacker_news_stories (
          rank,
          headline,
          summary,
          points,
          article_url,
          hn_url,
          source,
          generated_at
        )
        VALUES (
          ${story.rank},
          ${story.headline},
          ${story.summary},
          ${story.points},
          ${story.articleUrl},
          ${story.hnUrl},
          ${story.source},
          ${story.generatedAt}
        )
        ON CONFLICT (hn_url) DO UPDATE SET
          rank = EXCLUDED.rank,
          headline = EXCLUDED.headline,
          summary = EXCLUDED.summary,
          points = EXCLUDED.points,
          article_url = EXCLUDED.article_url,
          source = EXCLUDED.source,
          generated_at = EXCLUDED.generated_at,
          ingested_at = now()
        RETURNING id
      `;
      stored.push(row);
    }

    return stored;
  });

  return { stored: rows.length };
}

export async function listLatestNewsStories() {
  await ensureSchema();

  return getSql()`
    SELECT rank, headline, summary, points, article_url, hn_url, source, generated_at
    FROM hacker_news_stories
    WHERE generated_at = (
      SELECT max(generated_at)
      FROM hacker_news_stories
    )
    ORDER BY rank ASC, id ASC
  `;
}

export async function listNewsStoriesByDate(date) {
  await ensureSchema();

  return getSql()`
    SELECT rank, headline, summary, points, article_url, hn_url, source, generated_at
    FROM hacker_news_stories
    WHERE generated_at::date = ${date}::date
    ORDER BY generated_at DESC, rank ASC, id ASC
  `;
}
