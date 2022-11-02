class Notify {
    send(template: string, to: string) {
        console.log(`Send ${template}: ${to}`)
    }
}

class Log {
    log(message: string) {
        console.log(message)
    }
}

class Template {
    private templates = [
        {name: 'other', template: '<h1>Some template</h1>'}
    ]

    getByName(templateName: string) {
        return this.templates.find(({name}) => name == templateName)
    }
}

class NotificationFacade {
    private notifier: Notify
    private logger: Log
    private template: Template

    constructor() {
        this.notifier = new Notify()
        this.logger = new Log()
        this.template = new Template()
    }

    send(templateName: string, to: string) {
        const template = this.template.getByName(templateName)
        if (template) {
            this.notifier.send(template.template, to)
            this.logger.log('Template send.')
        } else {
            this.logger.log('Template name not found!')
        }
    }

}


const s = new NotificationFacade()
s.send('other', 'John')
