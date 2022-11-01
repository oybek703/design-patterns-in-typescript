function Unv(name: string): any {
    console.log(`Initializing ${name}`)
    return function () {
        console.log(`Running ${name}`)
    }
}

@Unv('CLASS')
class User {
    @Unv('PROP')
    prop: string
    @Unv('STATIC PROP1')
    static prop1: string

    constructor(@Unv('CONSTRUCTOR PARAM') _: any) {
    }

    @Unv('METHOD')
    method(@Unv('METHOD PARAM')_: string) {

    }

    @Unv('STATIC METHOD1')
    static method1(@Unv('STATIC METHOD1 PARAM')_: string) {

    }
}
