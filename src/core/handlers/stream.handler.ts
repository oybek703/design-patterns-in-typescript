import {ChildProcessWithoutNullStreams} from 'child_process'
import {IStreamLogger} from './streamLogger.interface'


export class StreamHandler {
    constructor(public logger: IStreamLogger) {}

    processOut(stream: ChildProcessWithoutNullStreams) {
        stream.stdout.on('data', (chunk: any) => {
            this.logger.log(chunk.toString())
        })
        stream.stderr.on('data', (chunk: any) => {
            this.logger.error(chunk.toString())
        })
        stream.on('close', (code, signal) => {
            this.logger.end()
        })
    }
}
