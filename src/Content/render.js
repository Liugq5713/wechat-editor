import marked from 'marked'

export default class WechatRender {
    constructor() {
        this.renderer = new marked.Renderer()
    }
    getWechatRenderer() {
        this.renderer.link = (href, title, text) => {
            console.log('text', text)
            console.log('title', title)
            console.log('href', href)
        }
        return this.renderer
    }
}