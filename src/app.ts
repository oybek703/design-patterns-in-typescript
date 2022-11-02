import {PromptService} from './core/prompt/prompt.service'

class App {
    async run() {
        const res = await new PromptService().input<number>('Number', 'number')
        console.log(res)
    }
}

const app = new App()
;(async () => app.run())()
