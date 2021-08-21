import { IObject } from "./object"

/**
 * https://github.com/Vanessa219/vditor#optionspreview
 */
export interface IPreview {
    delay?: number
    maxWidth?: number
    mode?: "both" | "editor"
    url?: string
    parse?: (element: HTMLElement) => void
    transform?: (html: string) => string
    hljs?: IPreviewHLJS
    markdown?: IPreviewMarkdown
    theme?: IPreviewTheme
    math?: IPreviewMath
    actions?: IPreviewActions
}

/**
 * https://github.com/Vanessa219/vditor/blob/master/types/index.d.ts#L505
 */
export interface IPreviewOptions {
    mode: "dark" | "light"
    customEmoji?: IObject
    lang?: keyof II18n
    i18n?: ITips
    lazyLoadImage?: string
    emojiPath?: string
    hljs?: IHljs
    speech?: {
        enable?: boolean
    }
    anchor?: number // 0: no render, 1: render left, 2: render right
    math?: IMath
    cdn?: string
    markdown?: IMarkdownConfig
    renderers?: ILuteRender
    theme?: IPreviewTheme
    icon?: "ant" | "material" | undefined

    transform?(html: string): string

    after?(): void
}

/**
 * https://github.com/Vanessa219/vditor#optionspreviewhljs
 */
export interface IPreviewHLJS {
    enable?: boolean
    style?: string
    lineNumber?: boolean
}

/**
 * https://github.com/Vanessa219/vditor#optionspreviewmarkdown
 */
export interface IPreviewMarkdown {
    autoSpace?: boolean
    fixTermTypo?: boolean
    toc?: boolean
    footnotes?: boolean
    codeBlockPreview?: boolean
    mathBlockPreview?: boolean
    paragraphBeginningSpace?: boolean
    sanitize?: boolean
    listStyle?: boolean
    linkBase?: string
    linkPrefix?: string
    mark?: boolean
}

/**
 * https://github.com/Vanessa219/vditor#optionspreviewtheme
 */
export interface IPreviewTheme {
    current: string
    list?: IObject
    path?: string
}

/**
 * https://github.com/Vanessa219/vditor#optionspreviewmath
 */
export interface IPreviewMath {
    inlineDigit?: boolean
    macros?: object
    engine?: "KaTeX" | "MathJax"
}

/**
 * https://github.com/Vanessa219/vditor#optionspreviewactions-arrayipreviewaction--ipreviewactioncustom
 */
export type IPreviewAction =
    | "desktop"
    | "tablet"
    | "mobile"
    | "mp-wechat"
    | "zhihu"

export interface IPreviewActionCustom {
    key: string
    text: string
    tooltip?: string
    className?: string
    click(key: string): void
}

export type IPreviewActions = Array<IPreviewAction | IPreviewActionCustom>
