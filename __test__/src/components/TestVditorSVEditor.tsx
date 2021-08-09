import React, { FC, useEffect, useState } from "react"
import Vditor from "vditor"
import { VditorSVEditor } from "react-vditor"

const TestVditorSVEditor: FC = () => {
    const [vditor, setVditor] = useState<Vditor>()
    useEffect(() => {
        if (!!vditor) {
            console.log(`Update SV Vditor:`)
            console.log(vditor)
        }
    }, [vditor])
    return <VditorSVEditor keyID="sv-editor-demo" bindVditor={setVditor} />
}

export default TestVditorSVEditor
