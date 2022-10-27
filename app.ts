class User {
    name: string
    age: number
}

function getValue<T extends User, K extends keyof T>(user: T, key: K) {
    return user[key]
}

console.log(getValue(new User(), 'name'))
