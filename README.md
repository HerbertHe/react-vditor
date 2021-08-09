# react-vditor

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

## Vditor Components of react-vditor

## Props of Vditor Components

## Development

The project packages are managed by pnpm

```bash
npm install -g pnpm

pnpm install

pnpm add tsup -D
```

## Scripts

```bash
# for dev
pnpm dev

# for build
pnpm build
```

## License

MIT &copy; [Herbert He](https://github.com/HerbertHe)
