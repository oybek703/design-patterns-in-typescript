abstract class App {
    abstract handle(): void

    async handleWithLogs() {
        console.time('handle')
        await this.handle()
        console.timeEnd('handle')
    }
}

class MyApp extends App {
    async handle() {
        return new Promise(resolve => {
            setTimeout(function () {
                console.log('Child method handle class.')
                resolve('Child method handle class.')
            }, 3000)
        })
    }
}

const myApp1 = new MyApp();

(async () => await myApp1.handleWithLogs())()
