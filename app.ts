const roles = ['user', 'admin', 'moderator'] as const

type rolesType = typeof roles[number]


interface Role {
    name: string
}

interface User {
    name: string
    roles: Role[]
}

type roleType = User['roles'][number]
