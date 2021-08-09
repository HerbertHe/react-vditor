import React, { FC, createRef, useEffect } from "react"
import Vditor from "vditor"

import { defaultSVOptions } from "../types/options"
import { IVditorEditorProps } from "./Vditor"

export interface IVditorSVEditorProps extends IVditorEditorProps {}

const VditorSVEditor: FC<IVditorSVEditorProps> = ({
    keyID,
    options,
    bindVditor,
}) => {
    const vditorRef = createRef<HTMLDivElement>()

    useEffect(() => {
        // initial Vditor
        const id = `vditor-editor-sv-${keyID}`
        let opts = !!options ? options : defaultSVOptions
        const vditor = new Vditor(id, opts)
        if (!!bindVditor) {
            bindVditor(vditor)
        }
    }, [])

    return <div id={`vditor-editor-sv-${keyID}`} ref={vditorRef}></div>
}

export default VditorSVEditor
