import {FfmpegExecutor} from './commands/ffmpeg/ffmpeg.executor'
import {ConsoleLogger} from './out/consoleLogger/consoleLogger'

class App {
    async run() {
        await new FfmpegExecutor(ConsoleLogger.getInstance()).execute()
    }
}

const app = new App()
;(async () => app.run())()
