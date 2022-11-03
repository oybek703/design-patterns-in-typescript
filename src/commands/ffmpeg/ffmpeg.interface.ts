import {ICommandExec} from '../../core/executor/command.types'

export interface IFfmpegInput {
    width: number
    height: number
    path: string
    filename: string
}

export interface IFfmpegCommandExec extends ICommandExec{
    output: string
}
