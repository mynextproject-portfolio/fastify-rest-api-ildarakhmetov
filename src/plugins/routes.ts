import { FastifyInstance, FastifyPluginOptions } from 'fastify';

/**
 * Routes plugin - registers all route modules
 */
async function routes(_fastify: FastifyInstance, _options: FastifyPluginOptions): Promise<void> {
  // something should be here!
  // maybe we should call a ping endpoint?
}

export default routes; 
