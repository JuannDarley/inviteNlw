import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

export async function sendMessageService() {
  const client = new SESClient({ region: 'us-east-1' })
  const command = new SendEmailCommand({
    Destination: {
      ToAddresses: ['ketlynmsantos@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: 'Testando o email para minha goxtosa!',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Teste de Envio',
      },
    },
    Source: 'juandarley99@gmail.com',
  })
  console.log('console na função')
  try {
    const response = await client.send(command)
    console.log('Email enviado com sucesso:', response)
    return response
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    throw error
  }
}
