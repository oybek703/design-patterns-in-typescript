enum StatusCode {
    SUCCESS,
    FAILED = 'F',
    IN_PROCESS = 'P'
}

function action(status: StatusCode) {

}


action(1)
action(3)
action('F')

function compute() {
    return 100
}

enum Roles {
    USER = 1,
    ADMIN = USER * 10,
    MODERATOR = compute()
}

function test(x: { ADMIN: number }) {

}

test(Roles)
