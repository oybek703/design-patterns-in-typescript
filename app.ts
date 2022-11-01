interface IUserService {
    users: number
    getUsersInDatabase: () => number
}

@AddCreatedAt
class UserService implements IUserService {
    users: 1000

    getUsersInDatabase() {
        return this.users
    }
}

function AddCreatedAt<T extends new (...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
        createdAt = new Date()
    }
}

type CreateAt = {
    createdAt: Date
}

const usersService = new UserService()
console.log((usersService as IUserService & CreateAt).createdAt)
