import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { sendMessageService } from '../service/SendMessageService'
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
      const funcionou = 'email enviado'

      const sendEmail = await sendMessageService()

      console.log(sendEmail)

      return reply.status(201).send({ funcionou })
    }
  )
}
