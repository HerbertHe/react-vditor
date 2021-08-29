import React, { FC, createRef, useEffect } from "react"
import Vditor from "vditor"

import { defaultWYSIWYGOptions } from "../types/options"
import { importDefaultTheme } from "../utils"
import { IVditorEditorProps } from "./Vditor"

export interface IVditorWYSIWYGEditorProps extends IVditorEditorProps {}

const VditorWYSIWYGEditor: FC<IVditorWYSIWYGEditorProps> = ({
    keyID,
    options,
    bindVditor,
}) => {
    const vditorRef = createRef<HTMLDivElement>()
    useEffect(() => {
        // initial Vditor
        const id = `vditor-editor-wysiwyg-${keyID}`
        let opts = !!options ? options : defaultWYSIWYGOptions
        const vditor = new Vditor(id, opts)
        if (!!bindVditor) {
            bindVditor(vditor)
        }
        importDefaultTheme(opts)
    }, [])

    return <div id={`vditor-editor-wysiwyg-${keyID}`} ref={vditorRef}></div>
}

export default VditorWYSIWYGEditor
