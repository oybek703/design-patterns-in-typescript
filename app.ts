class User {
    constructor(private name: string) {
    }

    logName() {
        console.log(this.name)
    }
}

new User('John').logName()
