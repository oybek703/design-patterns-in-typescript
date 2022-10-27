class UserBuilder {
    name: string

    setName(name: string): this {
        this.name = name
        return this
    }

    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder
    }
}

class AdminBuilder extends UserBuilder {
    roles: string[]
}

const res1 = new UserBuilder().setName('John')
const res2 = new AdminBuilder().setName('Doe')

const user: UserBuilder | AdminBuilder = new UserBuilder()

if (res1.isAdmin()) {
    console.log(user)
} else {
    console.log(user)
}
