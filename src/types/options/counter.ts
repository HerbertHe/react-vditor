/**
 * https://github.com/Vanessa219/vditor#optionscounter
 */
export interface ICounter {
    enable?: boolean
    after?: (length: number, counter?: ICounter) => void
    max?: number
    type?: "markdown" | "text"
}
