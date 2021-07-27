/**
 * https://github.com/Vanessa219/vditor#optionsupload
 */
export interface IUpload {
    url?: string
    max?: number
    linkToImgUrl: string
    linkToImgCallback?: (responseText: string) => void
    linkToImgFormat?: (responseText: string) => string
    success?: (editor: HTMLPreElement, msg: string) => void
    error?: (msg: string) => void
    token?: string
    withCredentials?: boolean
    headers: object
    filename?: (name: string) => string
    // TODO
    // accept
    // validate?: (files:)
    // handler
    // format
    // file
    // setHeaders?: () => { [key: string]: string }
    // extraData: { [key: string]: string | Blob }
    multiple?: boolean
    // fieldName?:
}
