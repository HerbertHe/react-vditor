import React, { FC, createRef, useEffect } from "react"
import Vditor from "vditor"

import { IOptions, defaultOptions } from "../types/options"

export interface IVditorEditorProps {
    keyID: string
    options?: IOptions
    bindVditor?(vditor: Vditor): void
}

const VditorEditor: FC<IVditorEditorProps> = ({
    keyID,
    options,
    bindVditor,
}) => {
    const vditorRef = createRef<HTMLDivElement>()

    useEffect(() => {
        // initial Vditor
        const id = `vditor-editor-${keyID}`
        let opts = !!options ? options : defaultOptions
        const vditor = new Vditor(id, opts)
        if (!!bindVditor) {
            bindVditor(vditor)
        }
    }, [])

    return <div id={`vditor-editor-${keyID}`} ref={vditorRef}></div>
}

export default VditorEditor
