export interface IEvents {
    after?(): void
    input?(value: string): void
    focus?(value: string): void
    blur?(value: string): void
    esc?(value: string): void
    ctrlEnter?(value: string): void
    select?(value: string): void
}
