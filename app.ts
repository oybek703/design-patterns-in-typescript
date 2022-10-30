type A = Awaited<Promise<string>>
type A2 = Awaited<Promise<Promise<number>>>

interface IMenu {
    name: string
    url: string
}

async function getMenu<T>(): Promise<IMenu[]> {
    return [{name: 'Services', url: '/services'}]
}

type getMenuType = Awaited<ReturnType<typeof getMenu>>

async function getArray<T>(x: T): Promise<Awaited<T>[]> {
    return [await x]
}

async function getArray2<T>(x: T): Promise<T[]> {
    return [await x]
}


