import Fastify from 'fastify';
import landingPage, {
  myboxPage,
  myboxPrivacyPage,
  myboxTermsPage,
  newsPage,
} from './src/landing.js';
import {
  hasValidNewsAuth,
  listLatestNewsStories,
  listNewsStoriesByDate,
  storeNewsStories,
  validateNewsPayload,
} from './src/news.js';

const fastify = Fastify({ logger: false });
const port = Number(process.env.PORT || 3000);

fastify.get('/', async (_request, reply) => {
  return reply.type('text/html; charset=utf-8').send(landingPage);
});

fastify.get('/mybox', async (_request, reply) => {
  return reply.type('text/html; charset=utf-8').send(myboxPage);
});

fastify.get('/mybox/', async (_request, reply) => {
  return reply.type('text/html; charset=utf-8').send(myboxPage);
});

fastify.get('/mybox/privacy', async (_request, reply) => {
  return reply.type('text/html; charset=utf-8').send(myboxPrivacyPage);
});

fastify.get('/mybox/privacy/', async (_request, reply) => {
  return reply.type('text/html; charset=utf-8').send(myboxPrivacyPage);
});

fastify.get('/mybox/terms', async (_request, reply) => {
  return reply.type('text/html; charset=utf-8').send(myboxTermsPage);
});

fastify.get('/mybox/terms/', async (_request, reply) => {
  return reply.type('text/html; charset=utf-8').send(myboxTermsPage);
});

fastify.post('/news', async (request, reply) => {
  if (!hasValidNewsAuth(request)) {
    return reply.code(401).send({ error: 'Unauthorized' });
  }

  const validation = validateNewsPayload(request.body);
  if (!validation.ok) {
    return reply.code(400).send({ error: validation.error });
  }

  try {
    const result = await storeNewsStories(validation.stories);
    return reply.code(200).send(result);
  } catch (error) {
    request.log.error(error);
    return reply.code(500).send({ error: 'Database failure' });
  }
});

fastify.get('/news/latest', async (_request, reply) => {
  try {
    const stories = await listLatestNewsStories();
    return reply.type('text/html; charset=utf-8').send(newsPage({ stories }));
  } catch (error) {
    return reply.type('text/html; charset=utf-8').send(newsPage({ stories: [] }));
  }
});

fastify.get('/news/:date', async (request, reply) => {
  const { date } = request.params;

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return reply.code(404).type('text/html; charset=utf-8').send(landingPage);
  }

  try {
    const stories = await listNewsStoriesByDate(date);
    return reply.type('text/html; charset=utf-8').send(newsPage({
      stories,
      title: `Hacker News - ${date}`,
    }));
  } catch (error) {
    return reply.type('text/html; charset=utf-8').send(newsPage({
      stories: [],
      title: `Hacker News - ${date}`,
    }));
  }
});

fastify.setNotFoundHandler(async (_request, reply) => {
  return reply.code(404).type('text/html; charset=utf-8').send(landingPage);
});

try {
  await fastify.listen({ port, host: '0.0.0.0' });
  console.log(`Tinyhead landing listening on http://localhost:${port}`);
} catch (error) {
  console.error(error);
  process.exit(1);
}
