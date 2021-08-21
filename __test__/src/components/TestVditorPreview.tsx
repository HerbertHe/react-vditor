import React, { FC, useState, useEffect } from "react"
import { VditorPreview } from "react-vditor"

const TestVditorPreivew: FC = () => {
    const [markdown, setMarkdown] = useState("")

    useEffect(() => {
        ;(async () => {
            const req = await fetch(
                "https://cdn.jsdelivr.net/gh/Vanessa219/vditor@master/README.md"
            )

            const text = await req.text()
            setMarkdown(text)
        })()
    }, [])

    return (
        <div
            style={{
                backgroundColor: "white",
                width: "100%",
                padding: "20px",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    backgroundColor: "pink",
                    width: "100%",
                    padding: "10px",
                    fontWeight: 600,
                    color: "red",
                    boxSizing: "border-box",
                }}
            >
                测试文本来源于 Vditor
            </div>
            {!!markdown && (
                <VditorPreview markdown={markdown} customClass="test-class" />
            )}
        </div>
    )
}

export default TestVditorPreivew
