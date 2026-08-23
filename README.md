# Tinyhead Landing

A minimal personal landing page for side projects.

## Stack

- Node.js
- Fastify
- Plain HTML returned from `src/landing.js`
- Inline CSS

## Run

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## News Ingestion

`POST /news` is a write-only ingestion endpoint for the Lyzr agent.

Required environment variables:

- `DATABASE_URL`
- `LYZR_WEBHOOK_SECRET`

Request:

```bash
curl -X POST https://www.tinyhead.space/news \
  -H "Authorization: Bearer $LYZR_WEBHOOK_SECRET" \
  -H "Content-Type: application/json" \
  -d '{
    "source": "hacker-news",
    "generated_at": "2026-08-23T07:00:00Z",
    "stories": [
      {
        "rank": 1,
        "headline": "Example story",
        "summary": "Short agent-generated summary.",
        "points": 123,
        "article_url": "https://example.com/story",
        "hn_url": "https://news.ycombinator.com/item?id=123"
      }
    ]
  }'
```

Public pages:

- `/news/latest`
- `/news/YYYY-MM-DD`
