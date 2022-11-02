interface IMediator {
    notify(sender: string, event: string): void
}


class Notifications {
    send() {
        console.log('Send message!')
    }
}

class Log {
    log(message: string) {
        console.log(message)
    }
}

class Mediated {
    mediator: IMediator

    setMediator(mediator: IMediator) {
        this.mediator = mediator
    }
}

class EventHandler extends Mediated {
    myEvent() {
        this.mediator.notify('EventHandler', 'myEvent')
    }
}

class NotificationsMediator implements IMediator {

    constructor(public notifier: Notifications, public logger: Log, public handler: EventHandler) {}

    notify(_: string, event: string) {
        switch (event) {
            case 'myEvent':
                this.notifier.send()
                this.logger.log('Message send!')
                break
        }
    }
}

const logger = new Log()
const handler = new EventHandler()
const notifier = new Notifications()

const m = new NotificationsMediator(notifier, logger, handler)

handler.setMediator(m)
handler.myEvent()
