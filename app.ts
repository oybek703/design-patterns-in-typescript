interface IUserService {
    users: number
    getUsersInDatabase: () => number
}

// @threeUsers
// @nullUsers
@logUsers()
@setUsers(10)
// @setUsersAdvanced(300)
class UserService implements IUserService {
    users: number

    getUsersInDatabase() {
        return this.users
    }
}

function logUsers() {
    console.log('logUsers => init')
    return (target: Function) => {
        console.log('logUsers => run')
        console.log('Users: ', target.prototype.users)
    }
}

function nullUsers(target: Function) {
    target.prototype.users = 0
}

function setUsers(users: number) {
    console.log('setUsers => init')
    return (target: Function) => {
        console.log('setUsers => run')
        target.prototype.users = users
    }
}

function setUsersAdvanced(users: number) {
    return <T extends new (...args: any[]) => {}>(constructor: T) => {
        return class extends constructor {
            users = users
        }
    }
}

function threeUsers<T extends { new(...args: any[]): {} } >(constructor: T) {
    return class extends constructor {
        users = 3
    }
}

console.log(new UserService().getUsersInDatabase())
