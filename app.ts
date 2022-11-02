interface IMiddleware {
    next(mid: IMiddleware): IMiddleware

    handle(request: any): any
}

abstract class AbstractMiddleware implements IMiddleware {
    private nextMiddleware: IMiddleware

    handle(request: any): any {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(request)
        }
        return
    }

    next(mid: IMiddleware): IMiddleware {
        this.nextMiddleware = mid
        return mid
    }
}

class AuthMiddleware extends AbstractMiddleware {

    override handle(request: any): any {
        console.log('AuthMiddleware')
        if (request.userId === 1) {
            return super.handle(request)
        }
        return {error: 'Not authorized!'}
    }
}


class ValidateMiddleware extends AbstractMiddleware {
    override handle(request: any): any {
        console.log('ValidateMiddleware')
        if (request.body) {
            return super.handle(request)
        }
        return {error: 'No request body!'}
    }
}

class Controller extends AbstractMiddleware {
    override handle(request: any): any {
        console.log('Controller')
        return {success: request}
    }
}

const controller = new Controller()
const auth = new AuthMiddleware()
const validate = new ValidateMiddleware()

auth.next(validate).next(controller)

console.log(auth.handle({userId: 1, body: 'OK!'}))
