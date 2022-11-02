interface PaymentDetails {
    id: number
    sum: number
}

interface IPaymentAPI {
    getPaymentDetails(id: number): PaymentDetails | undefined
}

class PaymentAPI implements IPaymentAPI {

    private payments: PaymentDetails[] = [{id: 1, sum: 10000}]

    getPaymentDetails(paymentId: number): PaymentDetails | undefined {
        return this.payments.find(({id}) => paymentId)
    }
}

class PaymentAPIProxy implements IPaymentAPI {

    constructor(private api: PaymentAPI, private userId: number) {

    }

    getPaymentDetails(paymentId: number): PaymentDetails | undefined {
        if (this.userId === 1) {
            return this.api.getPaymentDetails(paymentId)
        }
        console.log('Trying to get payment details!')
    }
}

const proxy1 = new PaymentAPIProxy(new PaymentAPI(), 1)
console.log(proxy1.getPaymentDetails(1))


const proxy2 = new PaymentAPIProxy(new PaymentAPI(), 2)
console.log(proxy2.getPaymentDetails(1))
