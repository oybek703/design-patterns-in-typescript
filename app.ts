interface User {
    name: 'John'
    email: 'test@gmail.com'
}

interface Admin {
    role: 0 | 1
    name: 'Doe'
}

function isAdmin(user: User | Admin): user is Admin {
    return 'role' in user
}

function setRoleZero(user: User | Admin): never {
    if (isAdmin(user)) {
        user.role = 0
    }
    throw new Error('User is not admin!')
}

function logId(x: string | number) {
    if (isString(x)) {
        const tempX = x
    } else {

    }
}

function isString(x: string | number): x is string {
    return typeof x === 'string'
}
