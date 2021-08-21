import React, { useState } from "react"
import "./App.css"

import TestVditorEditor from "./components/TestVditorEditor"
import TestVditorIREditor from "./components/TestVditorIREditor"
import TestVditorPreivew from "./components/TestVditorPreview"
import TestVditorSVEditor from "./components/TestVditorSVEditor"
import TestVditorWYSIWYGEditor from "./components/TestVditorWYSIWYG"

function App() {
    return (
        <div className="App">
            <div className="Container">
                <div className="Label">默认Vditor编辑器</div>
                <TestVditorEditor />
            </div>
            <div className="Container">
                <div className="Label">即时渲染Vditor编辑器 (IR)</div>
                <TestVditorIREditor />
            </div>
            <div className="Container">
                <div className="Label">分屏渲染Vditor编辑器 (SV)</div>
                <TestVditorSVEditor />
            </div>
            <div className="Container">
                <div className="Label">所见即所得Vditor编辑器 (WYSIWYG)</div>
                <TestVditorWYSIWYGEditor />
            </div>
            <div className="Container">
                <div className="Label">测试预览</div>
                <TestVditorPreivew />
            </div>
        </div>
    )
}

export default App
