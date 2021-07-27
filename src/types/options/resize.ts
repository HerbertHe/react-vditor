/**
 * https://github.com/Vanessa219/vditor#optionsresize
 */
export interface IResize {
    enable?: boolean
    position?: "top" | "bottom"
    after?: (height: number) => void
}
