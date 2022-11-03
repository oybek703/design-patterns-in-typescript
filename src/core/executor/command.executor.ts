import { IStreamLogger } from '@core/handlers/streamLogger.interface'
import {ChildProcessWithoutNullStreams} from 'child_process'
import {ICommandExec} from '@core/executor/command.types'

export abstract class CommandExecutor<Input> {

    protected constructor(private logger: IStreamLogger) {}

    async execute() {
        const input = await this.prompt()
        const command = this.build(input)
        const stream = this.spawn(command)
        this.processStream(stream, this.logger)
    }

    protected abstract prompt(): Promise<Input>

    protected abstract build(input: Input): ICommandExec

    protected abstract spawn(command: ICommandExec): ChildProcessWithoutNullStreams

    protected abstract processStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLogger): void
}
