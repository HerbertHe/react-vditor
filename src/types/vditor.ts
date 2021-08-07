import {
    IVditorCounter,
    IVditorDevtools,
    IVditorHint,
    IVditorIR,
    IVditorOutline,
    IVditorPreview,
    IVditorResize,
    IVditorSV,
    IVditorTip,
    IVditorToolbar,
    IVditorUndo,
    IVditorUpload,
    IVditorWYSIWYG,
    Lute,
} from "./ivditor"
import { IOptions, ModeType } from "./options"

declare module "*.svg"
declare module "*.png"

/**
 * 声明 Vditor
 *
 * https://github.com/Vanessa219/vditor/blob/328d39830e221cfa60b1cecb8cf0f579352c3e00/types/index.d.ts#L676
 */
export interface IVditor {
    element: HTMLElement
    options: IOptions
    originalInnerHTML: string
    lute: Lute
    currentMode: ModeType
    devtools?: IVditorDevtools
    outline: IVditorOutline
    toolbar?: IVditorToolbar
    preview?: IVditorPreview
    counter?: IVditorCounter
    resize?: IVditorResize
    hint: IVditorHint
    tip: IVditorTip
    upload?: IVditorUpload
    undo?: IVditorUndo
    wysiwyg?: IVditorWYSIWYG
    ir?: IVditorIR
    sv?: IVditorSV
}
