class User {
    githubToken: string
    jwtToken: string
}

interface AuthStrategy {
    auth(user: User): boolean
}

class Auth {
    constructor(private strategy: AuthStrategy) {}

    authUser(user: User): boolean {
        return this.strategy.auth(user)
    }

    setStrategy(strategy: AuthStrategy) {
        this.strategy = strategy
    }
}

class JWTStrategy implements AuthStrategy{

    hasJWTToken(token: string): token is string {
        return token !== undefined
    }

    auth(user: User): boolean {
        return this.hasJWTToken(user.jwtToken)
    }
}

class GithubStrategy implements AuthStrategy{

    hasGithubToken(token: string): token is string {
        return token !== undefined
    }

    auth(user: User): boolean {
        return this.hasGithubToken(user.githubToken)
    }
}

const user = new User()
const auth = new Auth(new JWTStrategy())
console.log(auth.authUser(user))
user.githubToken = 'githubToken'
auth.setStrategy(new GithubStrategy())
console.log(auth.authUser(user))
