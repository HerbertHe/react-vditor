import React, { FC, createRef, useEffect } from "react"
import Vditor from "vditor"

import { IOptions } from "../types/options"

export interface IVditorEditorProps {
    key: string
    options?: IOptions
    // TODO 绑定返回 vditor 实例
    // bindVditor?(): void
}

const VditorEditor: FC<IVditorEditorProps> = ({ key, options }) => {
    const vditorRef = createRef<HTMLDivElement>()

    useEffect(() => {
        // initial Vditor
        const id = `vditor-editor-${key}`
        // 在此应该合并 options
        const vditor = new Vditor(id, options)
    }, [])

    return <div id={`vditor-editor-${key}`} ref={vditorRef}></div>
}

export default VditorEditor
