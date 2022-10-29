const a: number = Math.random() > 0.5 ? 1 : 0

interface HttpResponse<T extends 'success' | 'failed'> {
    code: number
    data: T extends 'success' ? string : Error
}

const res1: HttpResponse<'success'> = {
    code: 0,
    data: 'done'
}

const res2: HttpResponse<'failed'> = {
    code: 1,
    data: new Error('Some error')
}


class User {
    id: number
}

class UserPersistent extends User{
    dbId: string
}

type UserType<T extends number | string> = T extends number ? User : UserPersistent

function getUser<T extends string | number>(id: T): UserType<T> {
    if (typeof id == 'number') {
        return new User() as UserType<T>
    } else {
        return new UserPersistent()
    }
}
