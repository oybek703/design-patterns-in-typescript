interface IUserService {
    users: number
    getUsersInDatabase: () => number
}

class UserService implements IUserService {
    users: 1000

    @Log()
    getUsersInDatabase(): number {
        throw new Error('Some "getUsersInDatabase" error!')
    }
}

function Log(reThrow: boolean = false) {
    return (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
        descriptor.enumerable = true
        const oldFunc = descriptor.value
        descriptor.value = (...args: any[]) => {
            try {
                if (oldFunc) {
                    oldFunc(args)
                }
            } catch (e) {
                console.error(`Error occurred in ${propertyKey as string}`)
                if (reThrow) {
                    if (e instanceof Error) {
                        throw new Error(e.message)
                    }
                }
            }
        }
    }
}

const usersService = new UserService()
usersService.getUsersInDatabase()
console.log(Object.keys(usersService))
