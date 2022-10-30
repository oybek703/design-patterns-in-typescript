interface User {
    name: string
    age?: number
    email: string
}

type partial = Partial<User>

const u1: partial = {}

type readonly = Readonly<User>
type required = Required<User>
type requiredAndReadOnly = Readonly<Required<User>>
