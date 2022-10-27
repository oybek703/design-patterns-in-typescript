interface Data {
    id: number
    name: string
}

type orderTypes = 'asc' | 'desc'

function sortData<T extends Data>(data: Array<T>, order: orderTypes = 'asc'): Array<T> {
    return data.sort((a, b) => order === 'asc' ? a.id - b.id : b.id - a.id)
    // if (order === 'asc') {
    //     return data.sort((a, b) => a.id - b.id)
    // } else {
    //     return data.sort((a, b) => b.id - a.id)
    // }
}

const data: Data[] = [
    {id: Math.round(Math.random() * 100), name: 'u1'},
    {id: Math.round(Math.random() * 100), name: 'u2'},
    {id: Math.round(Math.random() * 100), name: 'u3'},
    {id: Math.round(Math.random() * 100), name: 'u4'}
]

console.log(data)
console.log(sortData(data, 'desc'))
console.log(sortData(data))
