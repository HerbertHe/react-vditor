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
    sanitize?: string
    listStyle?: boolean
    linkBase?: string
    linkPrefix?: string
    mark?: boolean
}

/**
 * https://github.com/Vanessa219/vditor#optionspreviewtheme
 */
export interface IPreviewTheme {
    current?: string
    list?: object
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
    text?: string
    tooltip?: string
    className?: string
    click?: (key: string) => void
}

export type IPreviewActions = Array<IPreviewAction | IPreviewActionCustom>
