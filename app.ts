class Res<T, K> {
    data?: T
    error?: K

    constructor(data?: T, error?: K) {
        this.data = data
        this.error = error
    }
}

const res1 = new Res<string, number>('data', 0)

class HttpRes<F> extends Res <string, number>{
    constructor(public code: F) {
        super()
    }
}

const res2 = new HttpRes<number>(1)
