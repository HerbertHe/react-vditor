import { IObject } from "../options/object"

export interface ILuteNode {
    TokensStr: () => string
    __internal_object__: {
        Parent: {
            Type: number
        }
        HeadingLevel: string
    }
}

/**
 * https://github.com/Vanessa219/vditor/blob/328d39830e221cfa60b1cecb8cf0f579352c3e00/types/index.d.ts#L23
 */
type ILuteRenderCallback = (
    node: ILuteNode,
    entering: boolean
) => [string, number]


interface ILuteRender {
    renderDocument?: ILuteRenderCallback
    renderParagraph?: ILuteRenderCallback
    renderText?: ILuteRenderCallback
    renderCodeBlock?: ILuteRenderCallback
    renderCodeBlockOpenMarker?: ILuteRenderCallback
    renderCodeBlockInfoMarker?: ILuteRenderCallback
    renderCodeBlockCode?: ILuteRenderCallback
    renderCodeBlockCloseMarker?: ILuteRenderCallback
    renderMathBlock?: ILuteRenderCallback
    renderMathBlockOpenMarker?: ILuteRenderCallback
    renderMathBlockContent?: ILuteRenderCallback
    renderMathBlockCloseMarker?: ILuteRenderCallback
    renderBlockquote?: ILuteRenderCallback
    renderBlockquoteMarker?: ILuteRenderCallback
    renderHeading?: ILuteRenderCallback
    renderHeadingC8hMarker?: ILuteRenderCallback
    renderList?: ILuteRenderCallback
    renderListItem?: ILuteRenderCallback
    renderTaskListItemMarker?: ILuteRenderCallback
    renderThematicBreak?: ILuteRenderCallback
    renderHTML?: ILuteRenderCallback
    renderTable?: ILuteRenderCallback
    renderTableHead?: ILuteRenderCallback
    renderTableRow?: ILuteRenderCallback
    renderTableCell?: ILuteRenderCallback
    renderFootnotesDef?: ILuteRenderCallback
    renderCodeSpan?: ILuteRenderCallback
    renderCodeSpanOpenMarker?: ILuteRenderCallback
    renderCodeSpanContent?: ILuteRenderCallback
    renderCodeSpanCloseMarker?: ILuteRenderCallback
    renderInlineMath?: ILuteRenderCallback
    renderInlineMathOpenMarker?: ILuteRenderCallback
    renderInlineMathContent?: ILuteRenderCallback
    renderInlineMathCloseMarker?: ILuteRenderCallback
    renderEmphasis?: ILuteRenderCallback
    renderEmAsteriskOpenMarker?: ILuteRenderCallback
    renderEmAsteriskCloseMarker?: ILuteRenderCallback
    renderEmUnderscoreOpenMarker?: ILuteRenderCallback
    renderEmUnderscoreCloseMarker?: ILuteRenderCallback
    renderStrong?: ILuteRenderCallback
    renderStrongA6kOpenMarker?: ILuteRenderCallback
    renderStrongA6kCloseMarker?: ILuteRenderCallback
    renderStrongU8eOpenMarker?: ILuteRenderCallback
    renderStrongU8eCloseMarker?: ILuteRenderCallback
    renderStrikethrough?: ILuteRenderCallback
    renderStrikethrough1OpenMarker?: ILuteRenderCallback
    renderStrikethrough1CloseMarker?: ILuteRenderCallback
    renderStrikethrough2OpenMarker?: ILuteRenderCallback
    renderStrikethrough2CloseMarker?: ILuteRenderCallback
    renderHardBreak?: ILuteRenderCallback
    renderSoftBreak?: ILuteRenderCallback
    renderInlineHTML?: ILuteRenderCallback
    renderLink?: ILuteRenderCallback
    renderOpenBracket?: ILuteRenderCallback
    renderCloseBracket?: ILuteRenderCallback
    renderOpenParen?: ILuteRenderCallback
    renderCloseParen?: ILuteRenderCallback
    renderLinkText?: ILuteRenderCallback
    renderLinkSpace?: ILuteRenderCallback
    renderLinkDest?: ILuteRenderCallback
    renderLinkTitle?: ILuteRenderCallback
    renderImage?: ILuteRenderCallback
    renderBang?: ILuteRenderCallback
    renderEmoji?: ILuteRenderCallback
    renderEmojiUnicode?: ILuteRenderCallback
    renderEmojiImg?: ILuteRenderCallback
    renderEmojiAlias?: ILuteRenderCallback
    renderToC?: ILuteRenderCallback
    renderFootnotesRef?: ILuteRenderCallback
    renderBackslash?: ILuteRenderCallback
    renderBackslashContent?: ILuteRenderCallback
}

/**
 * https://github.com/Vanessa219/vditor/blob/328d39830e221cfa60b1cecb8cf0f579352c3e00/types/index.d.ts#L108
 */
export declare class Lute {
    public static WalkStop: number
    public static WalkSkipChildren: number
    public static WalkContinue: number
    public static Version: string
    public static Caret: string

    public static New(): Lute

    public static GetHeadingID(node: ILuteNode): string

    public static NewNodeID(): string

    private constructor()

    public SetJSRenderers(options?: {
        renderers: {
            HTML2VditorDOM?: ILuteRender
            HTML2VditorIRDOM?: ILuteRender
            HTML2Md?: ILuteRender
            Md2HTML?: ILuteRender
            Md2VditorDOM?: ILuteRender
            Md2VditorIRDOM?: ILuteRender
            Md2VditorSVDOM?: ILuteRender
        }
    }): void

    public SetChineseParagraphBeginningSpace(enable: boolean): void

    public SetHeadingID(enable: boolean): void

    public SetRenderListStyle(enable: boolean): void

    public SetLinkBase(url: string): void

    public SetVditorIR(enable: boolean): void

    public SetVditorSV(enable: boolean): void

    public SetVditorWYSIWYG(enable: boolean): void

    public SetLinkPrefix(url: string): void

    public SetMark(enable: boolean): void

    public SetSanitize(enable: boolean): void

    public SetHeadingAnchor(enable: boolean): void

    public SetImageLazyLoading(imagePath: string): void

    public SetInlineMathAllowDigitAfterOpenMarker(enable: boolean): void

    public SetToC(enable: boolean): void

    public SetFootnotes(enable: boolean): void

    public SetAutoSpace(enable: boolean): void

    public SetFixTermTypo(enable: boolean): void

    public SetEmojiSite(emojiSite: string): void

    public SetVditorCodeBlockPreview(enable: boolean): void

    public SetVditorMathBlockPreview(enable: boolean): void

    public PutEmojis(emojis: IObject): void

    public GetEmojis(): IObject

    // debugger md
    public RenderEChartsJSON(text: string): string

    // md 转换为 html
    public Md2HTML(markdown: string): string

    // 粘贴时将 html 转换为 md
    public HTML2Md(html: string): string

    // wysiwyg 转换为 html
    public VditorDOM2HTML(vhtml: string): string

    // wysiwyg 输入渲染
    public SpinVditorDOM(html: string): string

    // 粘贴时将 html 转换为 wysiwyg
    public HTML2VditorDOM(html: string): string

    // 将 wysiwyg 转换为 md
    public VditorDOM2Md(html: string): string

    // 将 md 转换为 wysiwyg
    public Md2VditorDOM(markdown: string): string

    // ir 输入渲染
    public SpinVditorIRDOM(markdown: string): string

    // ir 获取 md
    public VditorIRDOM2Md(html: string): string

    // md 转换为 ir
    public Md2VditorIRDOM(text: string): string

    // 获取 HTML
    public VditorIRDOM2HTML(html: string): string

    // 粘贴时将 html 转换为 sv
    public HTML2VditorIRDOM(html: string): string

    // sv 输入渲染
    public SpinVditorSVDOM(text: string): string

    // 粘贴是 md 转换为 sv
    public Md2VditorSVDOM(text: string): string

    // 将markdown转化为JSON结构输出 https://github.com/88250/lute/issues/120
    public RenderJSON(markdown: string): string
}
