import {ChildProcessWithoutNullStreams, spawn} from 'child_process'
import {FileService} from '../../core/files/file.service'
import {PromptService} from '../../core/prompt/prompt.service'
import {FfmpegBuilder} from './ffmpeg.builder'
import {StreamHandler} from '../../core/handlers/stream.handler'
import {IFfmpegCommandExec, IFfmpegInput} from './ffmpeg.interface'
import {CommandExecutor} from '../../core/executor/command.executor'
import {IStreamLogger} from '../../core/handlers/streamLogger.interface'

export class FfmpegExecutor extends CommandExecutor<IFfmpegInput> {
    private fileService: FileService = new FileService()
    private promptService: PromptService = new PromptService()

    constructor(logger: IStreamLogger) {
        super(logger)
    }

    protected async prompt(): Promise<IFfmpegInput> {
        const width = await this.promptService.input<number>('Width', 'number')
        const height = await this.promptService.input<number>('Height', 'number')
        const path = await this.promptService.input<string>('Path', 'input')
        const filename = await this.promptService.input<string>('Filename', 'input')
        return {width, height, path, filename}
    }

    protected build({width, height, path, filename}: IFfmpegInput): IFfmpegCommandExec {
        const output = this.fileService.getFilePath(path, filename, 'mp4')
        const args = (new FfmpegBuilder())
            .input(path)
            .setVideoSize(width, height)
            .output(output)
        return {args, command: 'ffmpeg', output}
    }

    protected spawn({command, output, args}: IFfmpegCommandExec): ChildProcessWithoutNullStreams {
        this.fileService.deleteFileIfExists(output)
        return spawn(command, args)
    }

    protected processStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLogger) {
        const handler = new StreamHandler(logger)
        handler.processOut(stream)
    }

}
