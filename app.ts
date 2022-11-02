class DocumentItem {
    text: string
    state: DocumentItemState

    constructor() {
        this.setState(new DraftDocumentItemState())
    }

    getState() {
        return this.state
    }

    setState(state: DocumentItemState) {
        this.state = state
        state.setContext(this)
    }

    publishDoc() {
        this.state.publish()
    }

    deleteDoc() {
        this.state.delete()
    }
}

abstract class DocumentItemState {
    name: string
    item: DocumentItem

    setContext(item: DocumentItem) {
        this.item = item
    }

    abstract publish(): void
    abstract delete(): void
}

class DraftDocumentItemState extends DocumentItemState {
    constructor() {
        super()
        this.name = 'DraftDocumentItem'
    }

    publish() {
        console.log(`${this.item.text} sent to website!`)
        this.item.setState(new PublishDocumentItemState())
    }

    delete() {
        console.log('Document deleted!')
    }

}

class PublishDocumentItemState extends DocumentItemState {
    constructor() {
        super()
        this.name = 'PublishDocumentItem'
    }

    publish() {
        console.log('Document is already published!')
        this.item.setState(new DraftDocumentItemState())
    }

    delete() {
        console.log('Publish deleted!')
        this.item.setState(new DraftDocumentItemState())
    }

}

const item = new DocumentItem()
item.text = 'test001'
console.log(item.getState())
item.publishDoc()
console.log(item.getState())
item.publishDoc()
item.deleteDoc()
console.log(item.getState())
