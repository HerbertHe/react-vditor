import React, { FC, createRef, useEffect } from "react"
import Vditor from "vditor"

import { defaultIROptions } from "../types/options"
import { IVditorEditorProps } from "./Vditor"

export interface IVditorIREditorProps extends IVditorEditorProps {}

const VditorIREditor: FC<IVditorIREditorProps> = ({
    keyID,
    options,
    bindVditor,
}) => {
    const vditorRef = createRef<HTMLDivElement>()

    useEffect(() => {
        // initial Vditor
        const id = `vditor-editor-ir-${keyID}`
        let opts = !!options ? options : defaultIROptions
        const vditor = new Vditor(id, opts)
        if (!!bindVditor) {
            bindVditor(vditor)
        }
    }, [])

    return <div id={`vditor-editor-ir-${keyID}`} ref={vditorRef}></div>
}

export default VditorIREditor
