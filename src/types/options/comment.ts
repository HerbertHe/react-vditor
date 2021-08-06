/**
 * ⚠️ 仅支持 wysiwyg 模式
 * https://github.com/Vanessa219/vditor#optionscomment
 */
export interface IComment {
    enable: boolean
    add?(id: string, text: string, commentsData: ICommentData[]): void
    remove?(ids: string[]): void
    scroll?(top: number): void
    adjustTop?(commentsData: ICommentData[]): void
}

export interface ICommentData {
    id: string
    top: number
}
