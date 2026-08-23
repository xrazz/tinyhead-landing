import Fastify from 'fastify';
import landingPage, {
  myboxContactPage,
  myboxPage,
  myboxPrivacyPage,
  myboxTermsPage,
} from './src/landing.js';

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

fastify.get('/mybox/contact', async (_request, reply) => {
  return reply.type('text/html; charset=utf-8').send(myboxContactPage);
});

fastify.get('/mybox/contact/', async (_request, reply) => {
  return reply.type('text/html; charset=utf-8').send(myboxContactPage);
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
