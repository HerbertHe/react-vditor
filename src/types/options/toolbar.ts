/**
 * https://github.com/Vanessa219/vditor#optionstoolbar
 */
export type IToolbarItemEnumerated =
    | "emoji"
    | "headings"
    | "bold"
    | "italic"
    | "strike"
    | "|"
    | "line"
    | "quote"
    | "list"
    | "ordered-list"
    | "check"
    | "outdent"
    | "indent"
    | "code"
    | "inline-code"
    | "insert-after"
    | "insert-before"
    | "undo"
    | "redo"
    | "upload"
    | "link"
    | "table"
    | "record"
    | "edit-mode"
    | "both"
    | "preview"
    | "fullscreen"
    | "outline"
    | "code-theme"
    | "content-theme"
    | "export"
    | "devtools"
    | "info"
    | "help"
    | "br"

export interface IToolbarItemCustom {
    name: string
    icon?: string
    tip?: string
    tipPosition?: "n" | "ne" | "nw" | "s" | "se" | "sw" | "w" | "e"
    hotKey?: string
    suffix?: string
    prefix?: string
    // TODO IVditor
    click?: (event: Event, vditor: any) => void
    className?: string
    toolbar?: IToolbar
}

export type IToolbarItem = IToolbarItemEnumerated | IToolbarItemCustom

export type IToolbar = Array<IToolbarItem>

/**
 * https://github.com/Vanessa219/vditor#optionstoolbarconfig
 */
export interface IToolbarConfig {
    hide?: boolean
    pin?: boolean
}
