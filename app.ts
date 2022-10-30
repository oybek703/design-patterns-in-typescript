type ReadOrWrite = 'write' | 'read'
type Bulk = 'bulk' | ''

type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`

type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never

type T1 = ReadOrWriteBulk<Access>

type ErrorOrSuccess = 'error' | 'success'

type ResponseT = {
    result: `http${Capitalize<ErrorOrSuccess>}`
}

const res: ResponseT = {
    result: 'httpSuccess'
}
