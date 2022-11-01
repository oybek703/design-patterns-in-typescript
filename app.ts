class MyMap {
    private static instance: MyMap
    map: Map<number, string> = new Map()

    private constructor() {}

    clean() {
        this.map = new Map()
    }

    static get() {
        if (!MyMap.instance) {
            MyMap.instance = new MyMap()
        }
        return MyMap.instance
    }
}

class Service1 {
    addMap(key: number, value: string) {
        const myMap = MyMap.get()
        myMap.map.set(key, value)
    }
}

class Service2 {
    getByKey(key: number) {
        const myMap = MyMap.get()
        console.log(myMap.map.get(key))
        myMap.clean()
        console.log(myMap.map.get(key))
    }
}

new Service1().addMap(1, 'Working')
new Service2().getByKey(1)
