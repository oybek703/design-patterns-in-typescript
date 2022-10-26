class User {
    name: string
    age: number

    constructor()
    constructor(name: string)
    constructor(age: number)
    constructor(nameOrAge?: string | number, age?: number) {
        if (typeof nameOrAge === 'string') {
            this.name = nameOrAge
        } else if (typeof nameOrAge === 'number') {
            this.age = nameOrAge
        } else if (typeof age === 'number') {
            this.age = age
        }
    }
}

const user = new User('John')
const user1 = new User()
const user2 = new User(23)
