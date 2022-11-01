import 'reflect-metadata'

const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY')

interface IUserService {
    users: number
    getUsersInDatabase: () => number
}

class UserService implements IUserService {
    users: number

    getUsersInDatabase(): number {
        return this.users
    }

    @Validate()
    setUsersInDatabase(@Positive() num: number): void {
        this.users = num
    }
}

function Positive() {
    return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
        console.log(Reflect.getOwnMetadata('design:type', target, propertyKey))
        console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey))
        console.log(Reflect.getOwnMetadata('design:returntypes', target, propertyKey))
        let existingParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) ?? []
        existingParams.push(parameterIndex)
        Reflect.defineMetadata(POSITIVE_METADATA_KEY, existingParams, target, propertyKey)
    }
}

function Validate() {
    return (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<(...args: any) => any>) => {
        let method = descriptor.value
        descriptor.value = (...args: any) => {
            const positiveParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey)
            if (positiveParams) {
                for (const positiveParam of positiveParams) {
                    if (args[positiveParam] < 0) {
                        throw new Error('Number must be positive number or zero.')
                    }
                }
            }
            return method?.apply(target, args)
        }
    }
}

const usersService = new UserService()
usersService.setUsersInDatabase(-15)
