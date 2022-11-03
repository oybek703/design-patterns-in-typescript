export abstract class CommandExecutor {
    abstract getParams(...args: any[]): void
    abstract build(): void
    abstract spawn(): void
}
