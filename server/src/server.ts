import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { env } from './env'
import { accessInviteLinkRoute } from './routes/access-invite-link-route'
import { getRankingRoutes } from './routes/get-ranking-routes'
import { getSubscriberInviteClicksRoutes } from './routes/get-subscriber-invite-clicks-routes'
import { getSubscriberInviteCountRoutes } from './routes/get-subscriber-invites-count-routes'
import { getSubscriberRankingPositionRoutes } from './routes/get-subscriber-ranking-position'
import { subscribeToEventRoute } from './routes/subscribe-to-event-route'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors, {
  origin: 'http://localhost:3000',
})

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'NLW Connect',
      version: '0.0.1',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(subscribeToEventRoute)
app.register(accessInviteLinkRoute)
app.register(getSubscriberInviteClicksRoutes)
app.register(getSubscriberInviteCountRoutes)
app.register(getSubscriberRankingPositionRoutes)
app.register(getRankingRoutes)

app.listen({ port: env.PORT }).then(() => {
  console.log('🚀⚓ HTTP server running! ⚓🚀')
})
