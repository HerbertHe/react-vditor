import { ICommentData } from "../options"
import { IVditor } from "../vditor"

export * from "./ilute"

export interface IVditorDevtools {
    element: HTMLDivElement
    renderEcharts(vditor: IVditor): void
}

export interface IVditorOutline {
    element: HTMLElement
    render(vditor: IVditor): string
    toggle(vditor: IVditor, show?: boolean): void
}

export interface IVditorToolbar {
    elements?: { [key: string]: HTMLElement }
    element?: HTMLElement
}

export interface IVditorPreview {
    element: HTMLElement
    render(vditor: IVditor, value?: string): void
}

export interface IVditorCounter {
    element: HTMLElement
    render(vditor: IVditor, mdText?: string): void
}

export interface IVditorResize {
    element: HTMLElement
}

export interface IVditorHint {
    timeId: number
    element: HTMLDivElement
    recentLanguage: string
    fillEmoji(element: HTMLElement, vditor: IVditor): void
    render(vditor: IVditor): void
    genHTML(
        data: { html: string; value: string },
        key: string,
        vditor: IVditor
    ): void
    select(event: KeyboardEvent, vditor: IVditor): boolean
}

export interface IVditorTip {
    element: HTMLElement
    show(text: string, time?: number): void
    hide(): void
}

export interface IVditorUpload {
    element: HTMLElement
    isUploading: boolean
    range: Range
}

export interface IVditorUndo {
    clearStack(vditor: IVditor): void
    redo(vditor: IVditor): void
    undo(vditor: IVditor): void
    addToUndoStack(vditor: IVditor): void
    recordFirstPostion(vditor: IVditor, event: KeyboardEvent): void
    resetIcon(vditor: IVditor): void
}

export interface IVditorWYSIWYG {
    range: Range
    element: HTMLPreElement
    selectPopover: HTMLDivElement
    popover: HTMLDivElement
    afterRenderTimeoutId: number
    hlToolbarTimeoutId: number
    preventInput: boolean
    composingLock: boolean
    commentIds: string[]
    getComments(vditor: IVditor, getData?: boolean): ICommentData
    triggerRemoveComment(vditor: IVditor): void
    showComment(): void
    hideComment(): void
}

export interface IVditorIR {
    range: Range
    element: HTMLPreElement
    composingLock: boolean
    preventInput: boolean
    processTimeoutId: number
    hlToolbarTimeoutId: number
}

export interface IVditorSV {
    range: Range
    element: HTMLPreElement
    processTimeoutId: number
    hlToolbarTimeoutId: number
    composingLock: boolean
    preventInput: boolean
}
