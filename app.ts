function toString<T>(data: T): string | undefined {
    if (Array.isArray(data)) return data.toString()
    switch (typeof data) {
        case 'string':
            return data
        case 'bigint':
        case 'boolean':
        case 'number':
        case 'symbol':
        case 'function':
            return data.toString()
        default:
            return undefined
    }
}

console.log(toString(null))
