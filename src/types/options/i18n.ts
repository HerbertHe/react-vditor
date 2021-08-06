/**
 * https://github.com/Vanessa219/vditor/blob/master/types/index.d.ts#L233
 */

export interface ITips {
    [index: string]: string

    alignCenter: string
    alignLeft: string
    alignRight: string
    alternateText: string
    bold: string
    both: string
    check: string
    close: string
    code: string
    "code-theme": string
    column: string
    comment: string
    confirm: string
    "content-theme": string
    copied: string
    copy: string
    "delete-column": string
    "delete-row": string
    devtools: string
    down: string
    downloadTip: string
    edit: string
    "edit-mode": string
    emoji: string
    export: string
    fileTypeError: string
    footnoteRef: string
    fullscreen: string
    generate: string
    headings: string
    help: string
    imageURL: string
    indent: string
    info: string
    "inline-code": string
    "insert-after": string
    "insert-before": string
    insertColumnLeft: string
    insertColumnRight: string
    insertRowAbove: string
    insertRowBelow: string
    instantRendering: string
    italic: string
    language: string
    line: string
    link: string
    linkRef: string
    list: string
    more: string
    nameEmpty: string
    "ordered-list": string
    outdent: string
    outline: string
    over: string
    performanceTip: string
    preview: string
    quote: string
    record: string
    "record-tip": string
    recording: string
    redo: string
    remove: string
    row: string
    spin: string
    splitView: string
    strike: string
    table: string
    textIsNotEmpty: string
    title: string
    tooltipText: string
    undo: string
    up: string
    update: string
    upload: string
    uploadError: string
    uploading: string
    wysiwyg: string
}

export interface II18n {
    en_US: ITips
    ja_JP: ITips
    ko_KR: ITips
    ru_RU: ITips
    zh_CN: ITips
    zh_TW: ITips
}
