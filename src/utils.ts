import type { IOptions } from "./types/options"
import { devDependencies } from "../package.json"

export function importDefaultTheme(options?: IOptions) {
    const existedVditorTheme = document.getElementById("react-vditor-theme")
    // 主题 DOM 存在
    if (!!existedVditorTheme) {
        return
    }
    const version = devDependencies["vditor"].replace("^", "")
    const linkDOM = document.createElement("link")
    linkDOM.rel = "stylesheet"
    linkDOM.href = !!options?.cdn
        ? `${options?.cdn}/dist/index.css`
        : `https://cdn.jsdelivr.net/npm/vditor@${version}/dist/index.css`
    linkDOM.id = "react-vditor-theme"
    document.head.appendChild(linkDOM)
}
