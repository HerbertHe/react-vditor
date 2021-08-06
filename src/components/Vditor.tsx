import React, { FC, createRef } from "react"
import { IOptions } from "../types/options"

export interface IVditorEditorProps {
    key: string
    options?: IOptions
    // TODO 绑定返回 vditor 实例
    // bindVditor?: () => any
}

const VditorEditor: FC<IVditorEditorProps> = ({ key }) => {
    const vditorRef = createRef<HTMLDivElement>()

    return <div id={`vditor-editor-${key}`} ref={vditorRef}></div>
}

export default VditorEditor
