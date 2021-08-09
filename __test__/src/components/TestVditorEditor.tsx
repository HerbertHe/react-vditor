import React, { FC, useState, useEffect } from "react"
import Vditor from "vditor"
import { VditorEditor } from "react-vditor"

const TestVditorEditor: FC = () => {
    const [vditor, setVditor] = useState<Vditor>()
    useEffect(() => {
        if (!!vditor) {
            console.log(`Update Default Vditor:`)
            console.log(vditor)
        }
    }, [vditor])
    return <VditorEditor keyID="base-editor" bindVditor={setVditor} />
}

export default TestVditorEditor
