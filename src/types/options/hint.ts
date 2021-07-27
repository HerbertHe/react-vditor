/**
 * https://github.com/Vanessa219/vditor#optionshint
 */
export interface IHint {
    parse?: boolean
    delay?: number
    /**
     * https://github.com/88250/lute/blob/master/parse/emoji_map.go
     */
    emoji?: object
    emojiTail?: string
    emojiPath?: string
    extend?: Array<IHintExtend>
}

export interface IHintExtend {
    key: string
    hint?(value: string): Array<{
        html: string
        value: string
    }>
}
