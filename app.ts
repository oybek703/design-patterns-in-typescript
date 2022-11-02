class Task {
    constructor(public priority: number) {
    }
}

class TaskList {
    private tasks: Task[] = []

    sortByPriority() {
        this.tasks = this.tasks.sort((a, b) => {
                if (a.priority > b.priority) {
                    return 1
                } else if (a.priority === b.priority) {
                    return 0
                } else {
                    return -1
                }
            }
        )
    }

    addTask(task: Task) {
        this.tasks.push(task)
    }

    getTasks() {
        return this.tasks
    }

    count() {
        return this.tasks.length
    }

}


interface IIterator<T> {
    current(): T | undefined

    next(): T | undefined

    prev(): T | undefined

    index(): number
}


class PriorityTaskIterator implements IIterator<Task> {

    private position: number = 0
    private readonly taskList: TaskList

    constructor(taskList: TaskList) {
        this.taskList = taskList
        this.taskList.sortByPriority()
    }

    current(): Task | undefined {
        return this.taskList.getTasks()[this.position]
    }

    next(): Task | undefined {
        this.position += 1
        return this.current()
    }

    prev(): Task | undefined {
        this.position -= 1
        return this.current()
    }

    index(): number {
        return this.position
    }

    getIterator() {
        return new PriorityTaskIterator(this.taskList)
    }


}

const taskList = new TaskList()
taskList.addTask(new Task(2))
taskList.addTask(new Task(4))
taskList.addTask(new Task(3))
taskList.addTask(new Task(6))
const iterator = new PriorityTaskIterator(taskList)
iterator.getIterator()
console.log(iterator.current())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.index())
