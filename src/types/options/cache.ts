/**
 * https://github.com/Vanessa219/vditor#optionscache
 */
export interface ICache {
    enable?: boolean
    id?: string
    after?: (html: string) => string
}
