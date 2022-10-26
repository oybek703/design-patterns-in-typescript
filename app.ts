type paymentAction = 'refund' | 'checkout' | 'reject'

function processAction(action: paymentAction) {
    switch (action) {
        case 'checkout':
            break
        case 'refund':
            break
        default:
            const _: never = action
            throw new Error('Invalid action type!')
    }
}

function generateError(): never {
    throw new Error('Error occurred!')
}

function getResult(x : number | string): boolean {
    if (typeof x === 'number') {
        return true
    } else if (typeof x === 'string') {
        return false
    }
    // generateError()
}
