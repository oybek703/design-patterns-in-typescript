class Payment {
    date: Date = new Date()

    getDate(this: Payment, title: string = 'Date') {
        return `${title} => ${this.date}`
    }

    getDateArrow = () => {
        return this.date
    }
}

const p1 = new Payment()

const user = {
    id: 1,
    paymentDate: p1.getDate.bind(p1)
}

class PaymentServices extends Payment{
    getInfo() {
        console.log(this)
        return super.getDateArrow()
    }
}

console.log(user.paymentDate())
console.log(new PaymentServices().getInfo())
