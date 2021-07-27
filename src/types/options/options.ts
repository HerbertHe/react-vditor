import { ICache } from "./cache"
import { ICounter } from "./counter"
import { IEvents } from "./events"
import { IToolbar, IToolbarConfig } from "./toolbar"

/**
 * https://github.com/Vanessa219/vditor#options
 */
export interface IOptions extends IEvents {
    // i18n:
    // undoDelay:
    height?: string
    minHeight?: string
    width?: string
    placeholder?: string
    lang?: "zh_CN" | "en_US" | "ja_JP" | "ko_KR" | "ru_RU" | "zh_TW"
    // tab:
    typewriterMode?: boolean
    cdn?: string
    mode?: "ir" | "sv" | "wysiwysg"
    debugger?: boolean
    value?: ""
    theme?: "classic" | "dark"
    icon?: "ant" | "material"
    toolbar?: IToolbar
    toolbarConfig?: IToolbarConfig
    counter?: ICounter
    cache?: ICache
}
