import inquirer from 'inquirer'
import {PromptTypes} from '@core/prompt/prompt.types'

export class PromptService {
    async input<T>(message: string, type: PromptTypes) {
        const {result} = await inquirer.prompt<{ result: T }>([{
                type,
                name: 'result',
                message
            }])
        return result
    }
}
