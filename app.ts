interface IData {
    sum: number
    from: number
    to: number
}

interface IReq extends IData {
}

enum Status {
    Success = 'status',
    Failed = 'failed'
}

interface IResDataSuccess extends IData {
    databaseId: number
}

interface IResDataFail {
    errorMessage: string
    errorCode: number
}

interface IResSuccess {
    status: Status.Success,
    data: IResDataSuccess
}

interface IResFail {
    status: Status.Failed,
    data: IResDataFail
}
