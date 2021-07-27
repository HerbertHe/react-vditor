/**
 * ⚠️ 仅支持 wysiwyg 模式
 * https://github.com/Vanessa219/vditor#optionscomment
 */
export interface IComment {
    enable?: boolean
    // TODO
    // add?: (id: string, text: string, commentsData: any) => void
    remove?: (ids: Array<string>) => void
    scroll?: (top: number) => void
    // adjustTop?: (commentsData: any) => void
}
