import { IObject } from "./object"

/**
 * https://github.com/Vanessa219/vditor#optionsupload
 *
 * https://github.com/Vanessa219/vditor/blob/master/types/index.d.ts#L334
 */
export interface IUpload {
    /** 上传 url */
    url?: string
    /** 上传文件最大 Byte */
    max?: number
    /** 剪切板中包含图片地址时，使用此 url 重新上传 */
    linkToImgUrl?: string
    /** CORS 上传验证，头为 X-Upload-Token */
    token?: string
    /** 文件上传类型，同 [input accept](https://www.w3schools.com/tags/att_input_accept.asp) */
    accept?: string
    /** 跨站点访问控制。默认值: false */
    withCredentials?: boolean
    /** 请求头设置 */
    headers?: IObject
    /** 额外请求参数 */
    extraData?: { [key: string]: string | Blob }
    /** 是否允许多文件上传。默认值：true */
    multiple?: boolean
    /** 上传字段名。默认值：file[] */
    fieldName?: string

    /** 每次上传前都会重新设置请求头 */
    setHeaders?(): IObject

    /** 上传成功回调 */
    success?(editor: HTMLPreElement, msg: string): void

    /** 上传失败回调 */
    error?(msg: string): void

    /** 文件名安全处理。 默认值: name => name.replace(/\W/g, '') */
    filename?(name: string): string

    /** 校验，成功时返回 true 否则返回错误信息 */
    validate?(files: File[]): string | boolean

    /** 自定义上传，当发生错误时返回错误信息 */
    handler?(files: File[]): string | null

    /** 对服务端返回的数据进行转换，以满足内置的数据结构 */
    format?(files: File[], responseText: string): string

    /** 对服务端返回的数据进行转换(对应linkToImgUrl)，以满足内置的数据结构 */
    linkToImgFormat?(responseText: string): string

    /** 将上传的文件处理后再返回  */
    file?(files: File[]): File[]

    /** 图片地址上传后的回调  */
    linkToImgCallback?(responseText: string): void
}
