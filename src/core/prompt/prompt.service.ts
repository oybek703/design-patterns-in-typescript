import {PromptTypes} from './prompt.types'
import inquirer from 'inquirer'

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
