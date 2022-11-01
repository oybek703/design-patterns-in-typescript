interface IUserService {
    users: number
    getUsersInDatabase: () => number
}

class UserService implements IUserService {
    users: 1000

    @Log({reThrow: true})
    getUsersInDatabase(): number {
        throw new Error('Some "getUsersInDatabase" error!')
    }
}

function Log({reThrow}: { reThrow: boolean } = {reThrow: false}) {
    return (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        descriptor.enumerable = true
        const oldFunc = descriptor.value
        descriptor.value = async (...args: any[]) => {
            try {
                return await oldFunc?.apply(target, args)
            } catch (e) {
                console.error(`Error occurred in ${propertyKey as string}`)
                if (reThrow) {
                    throw e
                }
            }
        }
    }
}

const usersService = new UserService()
usersService.getUsersInDatabase()
console.log(Object.keys(usersService))
