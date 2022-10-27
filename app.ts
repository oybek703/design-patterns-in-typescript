function toString<T>(data: T): string | undefined {
    return JSON.stringify(data)
}

const test1 = JSON.stringify(undefined)
