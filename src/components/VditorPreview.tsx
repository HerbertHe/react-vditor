import React, { createRef, FC, useEffect } from "react"
import Preivew from "vditor/dist/method.min"

export interface IVditorPreviewProps {
    markdown: string
    options?: IPreviewOptions
    customClass?: string
}

const VditorPreview: FC<IVditorPreviewProps> = ({
    markdown,
    options,
    customClass,
}) => {
    const previewRef = createRef<HTMLDivElement>()

    useEffect(() => {
        Preivew.preview(previewRef.current, markdown, options).then(() => {
            if (!!customClass) {
                previewRef.current.classList.add(customClass)
            }
        })
    }, [])

    return <div ref={previewRef}></div>
}

export default VditorPreview
