import { FastifyInstance, FastifyPluginOptions } from 'fastify';

/**
 * Routes plugin - registers all route modules
 */
async function routes(fastify: FastifyInstance, _options: FastifyPluginOptions): Promise<void> {
  // Ping endpoint - returns simple pong response
  fastify.get('/ping', async (_request, reply) => {
    return reply.code(200).send({ message: 'pong' });
  });
}

export default routes; 
