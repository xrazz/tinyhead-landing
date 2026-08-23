import Fastify from 'fastify';
import landingPage from './src/landing.js';

const fastify = Fastify({ logger: false });
const port = Number(process.env.PORT || 3000);

fastify.get('/', async (_request, reply) => {
  return reply.type('text/html; charset=utf-8').send(landingPage);
});

try {
  await fastify.listen({ port, host: '0.0.0.0' });
  console.log(`Tinyhead landing listening on http://localhost:${port}`);
} catch (error) {
  console.error(error);
  process.exit(1);
}
