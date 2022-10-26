function multiply(number: number) {
    return number * number
}

function test(param?: number) {
    const res = param ?? multiply(10)
}
