enum PaymentStatus {
    Hold,
    Processed,
    Reversed
}

class Payment {
    status: PaymentStatus = PaymentStatus.Hold
    id: string
    createdAt: Date = new Date()
    updatedAt: Date

    constructor(id: string) {
        this.id = id
    }

    unHoldPayment() {
        if (this.status !== PaymentStatus.Processed) {
            this.status = PaymentStatus.Reversed
            this.updatedAt = new Date()
        } else {
            throw new Error('Payment is already processed!')
        }
    }

    getLeftLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime()
    }
}

const p1 = new Payment('1')
p1.unHoldPayment()
console.log(p1)
console.log(p1.getLeftLifeTime())
