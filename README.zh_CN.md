# react-vditor

[![version](https://img.shields.io/npm/v/react-vditor.svg)](https://www.npmjs.com/package/react-vditor)
[![download](https://img.shields.io/npm/dm/react-vditor.svg)](https://www.npmjs.com/package/react-vditor)
[![cnpmVersion](https://cnpmjs.org/badge/v/react-vditor.svg)](https://cnpmjs.org/package/react-vditor)
[![cnpmDownload](https://cnpmjs.org/badge/d/react-vditor.svg)](https://cnpmjs.org/package/react-vditor)

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

react-vditor 是一个 Vditor 的包装器。由于 Vditor 与框架无关, 使用 Vditor 的时候需要在特定的生命周期初始化操作, 重复的操作总会使人厌烦。react-vditor 提供了一组 Vditor 组件, 涵盖常用的 Vditor 编辑器, 使 Vditor 在 React 框架开发内的易用性提高, 在全面兼容 Vditor 的基础上提供了自定义 props 等新特性提高开发体验。

## react-vditor 提供的组件

| 组件                      | 说明                                        |
| ------------------------- | :------------------------------------------ |
| `<VditorEditor />`        | 基础 Vditor 编辑器                          |
| `<VditorIREditor />`      | Vditor 即时渲染 (IR) 编辑器 (语法糖)        |
| `<VditorSVEditor />`      | Vditor 分屏渲染 (SV) 编辑器 (语法糖)        |
| `<VditorWYSIWYGEditor />` | Vditor 所见即所得 (WYSIWYG) 编辑器 (语法糖) |

## react-vditor 组件提供的 props

| 属性       | 类型                                       | 必填 | 说明                     |
| ---------- | ------------------------------------------ | ---- | :----------------------- |
| keyID      | string                                     | 是   | 编辑器唯一标识           |
| options    | [IOptions](./src/types/options/options.ts) | 否   | Vditor 配置项            |
| bindVditor | (vditor: Vditor): void                     | 否   | 绑定 Vditor 实例到 state |

## react-vditor 开发指南

项目依赖由 pnpm 管理

```bash
npm install -g pnpm

pnpm install

# for dev
pnpm dev

# for build
pnpm build
```

- 预览更改

```bash
cd __test__

pnpm install

pnpm link ..
```

## 许可证

MIT &copy; [Herbert He](https://github.com/HerbertHe)
