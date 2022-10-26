interface IData {
    sum: number
    from: number
    to: number
}

interface IReq extends IData {
}

enum Status {
    Success = 'success',
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

type Res = IResSuccess | IResFail

type f = (res: Res) => number

const reportResponse:f = (res: Res) => {
    if (isSuccess(res)) return res.data.databaseId
    throw new Error(res.data.errorMessage)
}

function isSuccess(res: Res): res is IResSuccess {
    return res.status === Status.Success
}
