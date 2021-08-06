/**
 * https://github.com/Vanessa219/vditor#optionscounter
 */

export interface ICounterBase {
    enable?: boolean
    max?: number
    type?: "markdown" | "text"
}
export interface ICounter extends ICounterBase {
    after?(length: number, counter?: ICounterBase): void
}
