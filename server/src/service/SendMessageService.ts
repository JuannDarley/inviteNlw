import { SendEmailCommand } from "@aws-sdk/client-ses"


class SendMessageService {
  private client: SendEmailCommand

  constructor() {
    this.client = new SendEmailCommand(config)
  }

  async run(): Promise<void> {
    await this.client.({
      Source: 'Juan Darley <juandarley99@gmail.com>',
      Destination: {
        ToAddresses: ['Ketlyn Moreira <lookmestoreoffc@gmail.com>'],
      },
      Message: {
        Subject: {
          Data: 'Olá delicia!',
        },
        Body: {
          Text: {
            Data: 'Testando o email para minha goxtosa!',
          },
        },
      },
      ConfigurationSetName: 'InviteNlw',
    }).promise
  }
}

export default SendMessageService
