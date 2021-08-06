import { IVditor } from "../vditor"

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
