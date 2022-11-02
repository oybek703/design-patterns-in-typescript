interface IProvider {
    connect(config: string): void

    send(message: string): void

    disconnect(): void
}

class TelegramProvider implements IProvider {
    connect(config: string) {
        console.log(config)
    }

    send(message: string) {
        console.log(message)
    }

    disconnect() {
        console.log('Disconnect Telegram!')
    }
}
class WhatsUpProvider implements IProvider {
    connect(config: string) {
        console.log(config)
    }

    send(message: string) {
        console.log(message)
    }

    disconnect() {
        console.log('Disconnect WhatsUp!')
    }
}

class NotificationSender {
    constructor(private provider: IProvider) {
    }

    sendMessage(message: string) {
        this.provider.connect('some config')
        this.provider.send(message)
        this.provider.disconnect()
    }
}

class DelayedNotificationSender extends NotificationSender{
    constructor(provider: IProvider) {
        super(provider)
    }
}

const sender = new NotificationSender(new TelegramProvider())
sender.sendMessage('message from Telegram!')
