# react-vditor

[![version](https://img.shields.io/npm/v/react-vditor.svg)](https://www.npmjs.com/package/react-vditor)
[![download](https://img.shields.io/npm/dm/react-vditor.svg)](https://www.npmjs.com/package/react-vditor)
[![cnpmVersion](https://cnpmjs.org/badge/v/react-vditor.svg)](https://cnpmjs.org/package/react-vditor)
[![cnpmDownload](https://cnpmjs.org/badge/d/react-vditor.svg)](https://cnpmjs.org/package/react-vditor)

[English](./README.md) | [简体中文](./README.zh_CN.md)

Vditor Components for React!

> About Vditor, see [Vanessa219/vditor](https://github.com/Vanessa219/vditor)

## Usage

- Add dependencies

```bash
npm install vditor react-vditor
# or
yarn add vditor react-vditor
# or
pnpm install vditor react-vditor
```

- Import component

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

## What is react-vditor?

react-vditor is a wrapper of Vditor. Due to the reason that the Vditor is independent of frameworks, and we always need to initialize the Vditor in the lifecycle! Repeated operations are always boring! Thus, react-vditor provides some components for React that cover commonly used Vditor editors, makes it easy to use in React.

What's more, the react-vditor is well compatible with Vditor and provides some custom props for better development experience.

## Vditor Components of react-vditor

| components                | description                          |
| ------------------------- | :----------------------------------- |
| `<VditorEditor />`        | Basic Vditor editor                  |
| `<VditorIREditor />`      | Vditor IR editor (Syntax Sugar)      |
| `<VditorSVEditor />`      | Vditor SV editor (Syntax Sugar)      |
| `<VditorWYSIWYGEditor />` | Vditor WYSIWYG editor (Syntax Sugar) |

## Props of Vditor Components

| props      | type                                       | required | description                   |
| ---------- | ------------------------------------------ | -------- | :---------------------------- |
| keyID      | string                                     | √        | ID of editor                  |
| options    | [IOptions](./src/types/options/options.ts) | ×        | Vditor options                |
| bindVditor | (vditor: Vditor): void                     | ×        | Bind Vditor instance to state |

## Development

- The project packages are managed by pnpm

```bash
npm install -g pnpm

pnpm install

# for dev
pnpm dev

# for build
pnpm build
```

- Preivew Changes

```bash
cd __test__

pnpm install

pnpm link ..
```

## License

MIT &copy; [Herbert He](https://github.com/HerbertHe)
