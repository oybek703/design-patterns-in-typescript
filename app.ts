abstract class Logger {
    abstract log(message: unknown): void

    printDate() {
        this.log(new Date())
    }
}

class MyLogger extends Logger {
    log(message: string) {
        console.log(message)
    }

    logWithDate(message: string) {
        this.printDate()
        this.log(message)
    }
}

const myLogger1 = new MyLogger()

myLogger1.logWithDate('Some log...')
