interface IUserService {
    users: number
    getUsersInDatabase: () => number
}

class UserService implements IUserService {
    @Max(100)
    users: number = 1000

    @Log({reThrow: true})
    getUsersInDatabase(): number {
        throw new Error('Some "getUsersInDatabase" error!')
    }
}

function Max(max: number) {
    return (target: Object, propertyKey: string | symbol) => {
        let value: number
        const setter = (newValue: number) => newValue > max ? console.log(`Cannot set value more than ${max}`) : value = newValue
        const getter = () => value
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })
    }
}

const userService = new UserService()
userService.users = 20
console.log(userService.users)

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

