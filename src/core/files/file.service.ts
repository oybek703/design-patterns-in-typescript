import { promises } from 'fs'
import {dirname, isAbsolute, join} from 'path'

export class FileService {
    private async isFileExists(path: string) {
        try {
            await promises.stat(path)
            return true
        } catch {
            return false
        }
    }

    getFilePath(path: string, filename: string, ext: string) {
        if (isAbsolute(path)) {
            path = join(`${__dirname}/${path}`)
        }
        return join(`${dirname(path)}/${filename}${ext}`)
    }

    async deleteFileIfExists(path: string) {
        if (await this.isFileExists(path)) {
            promises.unlink(path)
        }
    }

}
