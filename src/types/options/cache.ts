/**
 * https://github.com/Vanessa219/vditor#optionscache
 */
export interface ICache {
    id?: string
    enable?: boolean
    after?(markdown: string): void
}
