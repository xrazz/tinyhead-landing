import { createReadStream } from 'node:fs';
import Fastify from 'fastify';
import landingPage, {
  contactPage,
  myboxContactPage,
  myboxPage,
  myboxPrivacyPage,
  myboxTermsPage,
  projectsPage,
} from './src/landing.js';

const fastify = Fastify({ logger: false });
const port = Number(process.env.PORT || 3000);
const myboxLogoPath = new URL('./public/assets/mybox-logo.webp', import.meta.url);

fastify.get('/', async (_request, reply) => {
  return reply.type('text/html; charset=utf-8').send(landingPage);
});

fastify.get('/contact', async (_request, reply) => {
  return reply.type('text/html; charset=utf-8').send(contactPage);
});

fastify.get('/contact/', async (_request, reply) => {
  return reply.type('text/html; charset=utf-8').send(contactPage);
});

fastify.get('/projects', async (_request, reply) => {
  return reply.type('text/html; charset=utf-8').send(projectsPage);
});

fastify.get('/projects/', async (_request, reply) => {
  return reply.type('text/html; charset=utf-8').send(projectsPage);
});

fastify.get('/assets/mybox-logo.webp', async (_request, reply) => {
  return reply
    .header('Cache-Control', 'public, max-age=31536000, immutable')
    .type('image/webp')
    .send(createReadStream(myboxLogoPath));
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
