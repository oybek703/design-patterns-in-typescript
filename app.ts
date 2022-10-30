class User {
    constructor(public id: number, public name: string) {
    }
}

function getData(id: number): User {
    return new User(id, 'John')
}

type RT = ReturnType<typeof getData>
type RT2 = ReturnType<() => void>
type RT3 = ReturnType<<T>() => T>
type RT4 = ReturnType<<T extends string>() => T>

type RT1 = Parameters<typeof getData>[0]

type CP = ConstructorParameters<typeof User>
type IT = InstanceType<typeof User>


