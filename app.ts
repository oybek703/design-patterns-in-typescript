class KVDatabase {
    db: Map<string, string> = new Map<string, string>()

    save(key: string, value: string) {
        this.db.set(key, value)
    }
}

class PersistentDB {
    savePersistent(data: Object) {
        console.log(data)
    }
}

class PersistentDatabaseAdapter extends KVDatabase {

    constructor(private database: PersistentDB) {
        super()
    }

    override save(key: string, value: string) {
        this.database.savePersistent({key, value})
    }
}

function run(base: KVDatabase) {
    base.save('key1', 'value1')
}

run(new PersistentDatabaseAdapter(new PersistentDB()))
