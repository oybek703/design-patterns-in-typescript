type Modifier = 'read' | 'update' | 'create'

type UserRoles = {
    customers?: Modifier
    products?: Modifier
    adminPanel?: Modifier
}

type ModifierToAccess<Type> = {
    +readonly [Property in keyof Type as Exclude<`canAccess${string & Property}`, 'canAccesscustomers'>]-?: boolean
}

type UserAccess2 = ModifierToAccess<UserRoles>

type UserAccess = {
    customers?: boolean
    products?: boolean
    adminPanel?: boolean
}
