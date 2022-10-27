class Data {
    group: number
    name: string
}

const data: Data[] = [
    {group: 1, name: 'a'},
    {group: 1, name: 'b'},
    {group: 2, name: 'a'},
    {group: 1, name: 'c'},
    {group: 3, name: 'a'},
    {group: 2, name: 'b'}
]

interface IGroup<T> {
    [key: string]: T[]
}

function groupData<T extends Record<string, any>>(data: T[], key: keyof T): IGroup<T> {
    const res: IGroup<T> = {}
    data.forEach(value => {
        const resKey = value[key]
        if (!res[resKey]) {
            res[resKey] = []
            res[resKey].push(value)
        } else {
            res[resKey].push(value)
        }
    })
    return res
}

console.log(groupData(data, 'group'))
console.log(groupData(data, 'name'))
