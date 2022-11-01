interface IUserService {
    users: number
    getUsersInDatabase: () => number
}

class UserService implements IUserService {
    users = 1000

    getUsersInDatabase() {
        return this.users
    }
}

function nullUsers(obj: IUserService) {
    obj.users = 0
    return obj
}

function logUsers(obj: IUserService) {
    console.log('Users: ', obj.users)
    return obj
}

console.log(new UserService().getUsersInDatabase())
console.log(nullUsers(new UserService()).getUsersInDatabase())
logUsers(nullUsers(new UserService())).getUsersInDatabase()
