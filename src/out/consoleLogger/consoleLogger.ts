import {IStreamLogger} from '@core/handlers/streamLogger.interface'

export class ConsoleLogger implements IStreamLogger {
    private static instance: ConsoleLogger

    static getInstance() {
        if (!ConsoleLogger.instance) {
            ConsoleLogger.instance = new ConsoleLogger()
        }
        return ConsoleLogger.instance
    }

    end() {
        console.log('Ready!')
    }

    log(data: any) {
        console.log(data)
    }

    error(error: any) {
        console.error(error)
    }
}
