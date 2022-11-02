interface Observer {
    update(subject: Subject): void
}

interface Subject {
    attach(observer: Observer): void

    detach(observer: Observer): void

    notify(): void
}

class Lead {
    constructor(public name: string, public phone: string) {
    }
}

class NewLead implements Subject {
    private observers: Observer[] = []
    state: Lead

    attach(observer: Observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer)
        }
    }

    detach(observer: Observer) {
        const observerIndex = this.observers.indexOf(observer)
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1)
        }
    }

    notify() {
        for (const observer of this.observers) {
            observer.update(this)
        }
    }
}

class NotificationService implements Observer{
    update(subject: Subject) {
        console.log('NotificationService accepted notification!')
        console.log(subject)
    }
}


class LeadService implements Observer{
    update(subject: Subject) {
        console.log('LeadService accepted notification!')
        console.log(subject)
    }
}


const subject = new NewLead()
subject.state = new Lead('John', '123456')

const s1 = new NotificationService()
const s2 = new LeadService()

subject.attach(s1)
subject.attach(s2)
subject.notify()
subject.detach(s1)
subject.notify()

