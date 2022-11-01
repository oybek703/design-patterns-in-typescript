@threeUsers
@nullUsers
class UserService implements IUserService {
    users = 1000

    getUsersInDatabase() {
        return this.users
    }
}

interface IUserService {
    users: number
    getUsersInDatabase: () => number
}

function nullUsers(target: Function) {
    target.prototype.users = 0
}

function threeUsers<T extends new (...args: any[]) => {} >(constructor: T) {
    return class extends constructor {
        users = 3
    }
}

console.log(new UserService().getUsersInDatabase())
