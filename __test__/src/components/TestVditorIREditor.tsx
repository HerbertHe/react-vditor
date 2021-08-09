import React, { FC, useEffect, useState } from "react"
import Vditor from "vditor"
import { VditorIREditor } from "react-vditor"

const TestVditorIREditor: FC = () => {
    const [vditor, setVditor] = useState<Vditor>()
    useEffect(() => {
        if (!!vditor) {
            console.log(`Update IR Vditor:`)
            console.log(vditor)
        }
    }, [vditor])
    return <VditorIREditor keyID="ir-editor-demo" bindVditor={setVditor} />
}

export default TestVditorIREditor
