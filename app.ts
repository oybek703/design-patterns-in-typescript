interface Prototype<T> {
    clone(): T
}

class User implements Prototype<User> {
    createdAt: Date

    constructor(public email: string, public name: string) {
        this.createdAt = new Date()
    }

    clone(): User {
        const target = new User(this.email, this.name)
        target.createdAt = this.createdAt
        return target
    }

}

const user1 = new User('john@gmail.com', 'John')
console.log(user1)
const user2 = user1.clone()
user2.name = 'Doe'
user2.email = 'doe@gmail.com'
console.log(user2)
console.log(user1)
