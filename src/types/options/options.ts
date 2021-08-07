import { ICache } from "./cache"
import { IClasses } from "./classes"
import { IComment } from "./comment"
import { Constants } from "./constants"
import { ICounter } from "./counter"
import { IEvents } from "./events"
import { IFullscreen } from "./fullscreen"
import { IHint } from "./hint"
import { ITips } from "./i18n"
import { IOutline } from "./outline"
import { IPreview } from "./preview"
import { IResize } from "./resize"
import { IToolbar, IToolbarConfig } from "./toolbar"
import { IUpload } from "./upload"

export type LangType = "zh_CN" | "en_US" | "ja_JP" | "ko_KR" | "ru_RU" | "zh_TW"

export type ModeType = "ir" | "sv" | "wysiwyg"

export type ThemeType = "classic" | "dark"

export type IconType = "ant" | "material"

/**
 * https://github.com/Vanessa219/vditor#options
 *
 * https://github.com/Vanessa219/vditor/blob/328d39830e221cfa60b1cecb8cf0f579352c3e00/types/index.d.ts#L562
 */
export interface IOptions extends IEvents {
    _lutePath?: string
    i18n?: ITips
    undoDelay?: number
    height?: string
    minHeight?: number
    width?: string
    placeholder?: string
    lang?: LangType
    tab?: string
    typewriterMode?: boolean
    cdn?: string
    mode?: ModeType
    debugger?: boolean
    value?: ""
    theme?: ThemeType
    icon?: IconType
    toolbar?: IToolbar
    toolbarConfig?: IToolbarConfig
    counter?: ICounter
    cache?: ICache
    comment?: IComment
    classes?: IClasses
    fullscreen?: IFullscreen
    hint?: IHint
    outline?: IOutline
    preview?: IPreview
    resize?: IResize
    upload?: IUpload
}
export const defaultOptions: IOptions = {
    after: undefined,
    cache: {
        enable: true,
    },
    cdn: Constants.CDN,
    classes: {
        preview: "",
    },
    comment: {
        enable: false,
    },
    counter: {
        enable: false,
        type: "markdown",
    },
    debugger: false,
    fullscreen: {
        index: 90,
    },
    height: "500px",
    hint: {
        delay: 200,
        emoji: {
            "+1": "👍",
            "-1": "👎",
            confused: "😕",
            eyes: "👀️",
            heart: "❤️",
            rocket: "🚀️",
            smile: "😄",
            tada: "🎉️",
        },
        emojiPath: `${Constants.CDN}/dist/images/emoji`,
        extend: [],
        parse: true,
    },
    icon: "ant",
    lang: "zh_CN",
    mode: "ir",
    outline: {
        enable: false,
        position: "left",
    },
    placeholder: "",
    preview: {
        actions: ["desktop", "tablet", "mobile", "mp-wechat", "zhihu"],
        delay: 1000,
        hljs: Constants.HLJS_OPTIONS,
        markdown: Constants.MARKDOWN_OPTIONS,
        math: Constants.MATH_OPTIONS,
        maxWidth: 800,
        mode: "both",
        theme: Constants.THEME_OPTIONS,
    },
    resize: {
        enable: false,
        position: "bottom",
    },
    theme: "classic",
    toolbar: [
        "emoji",
        "headings",
        "bold",
        "italic",
        "strike",
        "link",
        "|",
        "list",
        "ordered-list",
        "check",
        "outdent",
        "indent",
        "|",
        "quote",
        "line",
        "code",
        "inline-code",
        "insert-before",
        "insert-after",
        "|",
        "upload",
        "record",
        "table",
        "|",
        "undo",
        "redo",
        "|",
        "fullscreen",
        "edit-mode",
        {
            name: "more",
            toolbar: [
                "both",
                "code-theme",
                "content-theme",
                "export",
                "outline",
                "preview",
                "devtools",
                "info",
                "help",
            ],
        },
    ],
    toolbarConfig: {
        hide: false,
        pin: false,
    },
    typewriterMode: false,
    undoDelay: 800,
    upload: {
        extraData: {},
        fieldName: "file[]",
        filename: (name: string) => name.replace(/\W/g, ""),
        linkToImgUrl: "",
        max: 10 * 1024 * 1024,
        multiple: true,
        url: "",
        withCredentials: false,
    },
    value: "",
    width: "auto",
}

const cleanToolbar: IToolbar = [
    "emoji",
    "headings",
    "bold",
    "italic",
    "strike",
    "link",
    "|",
    "list",
    "ordered-list",
    "check",
    "outdent",
    "indent",
    "|",
    "quote",
    "line",
    "code",
    "inline-code",
    "insert-before",
    "insert-after",
    "|",
    "upload",
    "record",
    "table",
    "|",
    "undo",
    "redo",
    "|",
    "fullscreen",
]

export const defaultIROptions: IOptions = {
    mode: "ir",
    toolbar: cleanToolbar,
}

export const defaultSVOptions: IOptions = {
    mode: "sv",
    toolbar: cleanToolbar
}

export const defaultWYSIWYGOptions: IOptions = {
    mode: "wysiwyg",
    toolbar: cleanToolbar
}
