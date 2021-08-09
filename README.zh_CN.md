# react-vditor

[English](./README.md) | [简体中文](./README.zh_CN.md)

React 开发中使用的 Vditor 组件

> 关于 Vditor 的细节 [Vanessa219/vditor](https://github.com/Vanessa219/vditor)

## 使用方法

- 安装依赖

```bash
npm install vditor react-vditor
# or
yarn add vditor react-vditor
# or
pnpm install vditor react-vditor
```

- 引入组件

```ts
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
```

## 什么是 react-vditor?

## react-vditor 提供的组件

## react-vditor 组件提供的 props

## react-vditor 开发指南

## 许可证

MIT &copy; [Herbert He](https://github.com/HerbertHe)
