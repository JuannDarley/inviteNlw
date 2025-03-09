import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import SendMessageService from '../service/SendMessageService'

export const sendMessageRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/sendMessage',
    {
      schema: {
        summary: 'Teste send message',
        tags: ['teste'],
        response: {
          201: z.object({
            funcionou: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const funcionou = 'Ok: enviado'

      const sendMessage = new SendMessageService()

      await sendMessage.run()

      return reply.status(201).send({
        funcionou,
      })
    }
  )
}
