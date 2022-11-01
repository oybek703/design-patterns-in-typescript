interface IUserService {
    users: number
    getUsersInDatabase: () => number
}

class UserService implements IUserService {
    users: number

    getUsersInDatabase(): number {
        return this.users
    }

    setUsersInDatabase(@Positive() num: number, @Positive() _?: number): void {
        this.users = num
    }
}

function Positive() {
    return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
        console.log(target)
        console.log(propertyKey)
        console.log(parameterIndex)
    }
}

const usersService = new UserService()
usersService.setUsersInDatabase(-15)
console.log(usersService.getUsersInDatabase())
