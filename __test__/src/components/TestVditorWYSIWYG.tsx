import React, { FC, useEffect, useState } from "react"
import Vditor from "vditor"
import { VditorWYSIWYGEditor } from "react-vditor"

const TestVditorWYSIWYGEditor: FC = () => {
    const [vditor, setVditor] = useState<Vditor>()
    useEffect(() => {
        if (!!vditor) {
            console.log(`Update WYSIWYG Vditor:`)
            console.log(vditor)
        }
    }, [vditor])
    return (
        <VditorWYSIWYGEditor
            keyID="wysiwyg-editor-demo"
            bindVditor={setVditor}
        />
    )
}

export default TestVditorWYSIWYGEditor
