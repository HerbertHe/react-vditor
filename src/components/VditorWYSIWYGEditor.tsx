import React, { FC, createRef, useEffect } from "react"
import Vditor from "vditor"

import { defaultWYSIWYGOptions } from "../types/options"
import { IVditorEditorProps } from "./Vditor"

export interface IVditorWYSIWYGEditorProps extends IVditorEditorProps {}

const VditorWYSIWYGEditor: FC<IVditorWYSIWYGEditorProps> = ({
    keyID,
    options,
}) => {
    const vditorRef = createRef<HTMLDivElement>()

    useEffect(() => {
        // initial Vditor
        const id = `vditor-editor-wysiwyg-${keyID}`
        let opts = !!options ? options : defaultWYSIWYGOptions
        const vditor = new Vditor(id, opts)
        console.log("Editor")
        console.log(vditor)
    }, [])

    return <div id={`vditor-editor-wysiwyg-${keyID}`} ref={vditorRef}></div>
}

export default VditorWYSIWYGEditor
