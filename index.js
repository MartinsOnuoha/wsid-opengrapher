import Fastify from 'fastify';
import ogs from 'open-graph-scraper';
import cors from '@fastify/cors'

const ALLOWED_DOMAINS = ['figma.com', 'dribbble.com', 'behance.net', 'craftwork.design', 'github.com']

const fastify = Fastify({ logger: false });
await fastify.register(cors, {
  origin: ['https://whatshouldidesign.space', 'http://localhost:5173', 'localhost:5173']
})
const errorResponse = (msg, reply) => {
  reply.statusCode = 400;
  return reply.send({ error: true, msg })
}

const successResponse = (data, reply) => {
  reply.statusCode = 200;
  return reply.send({ error: false, data })
}

const getDomainName = (hostname) => {
  const domain = /(?<=\.).+/.exec(hostname.replace('www.', ''))
  return domain.input;
}

fastify.get("/", async (request, reply) => {

  let { url } = request.query;
  if (!url) {
    return errorResponse('url query not provided', reply);
  }

  try {
    url = (!url.includes('http') && !url.includes('https')) ? `https://${url}` : url
    const hostName = getDomainName((new URL(url)).hostname)

    // if (!ALLOWED_DOMAINS.includes(hostName)) {
    //   return errorResponse('link source not allowed', reply)
    // }


    const { result, error } = await ogs({ url })

    if (error) {
      return errorResponse(error, reply)
    }

    return successResponse(result, reply)
  } catch (error) {
    return errorResponse(error, reply)
  }
});

try {
  await fastify.listen({ host: '0.0.0.0', port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
