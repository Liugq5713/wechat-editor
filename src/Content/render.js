import marked from 'marked'

export default class WechatRender {
    constructor(theme) {
        this.renderer = new marked.Renderer()
        this.theme = theme
        this.styleMapping = this.buildTheme(this.theme.theme)
        this.footnoteindex = 0
        this.ENV_USE_REFERENCES = true
        this.ENV_STETCH_IMAGE = true
        this.footnotes = []
    }
    COPY(base, extend) {
        return Object.assign({}, base, extend)
    }
    hasFootnotes() {
        return this.footnotes.length !== 0
    }
    buildTheme(themeTpl) {
        const FONT_FAMILY_MONO = "Operator Mono, Consolas, Monaco, Menlo, monospace"
        const mapping = {}
        var base = this.COPY(themeTpl.BASE, {
            'font-family': this.theme.fonts
        })
        var base_block = this.COPY(base, {
            'margin': '20px 10px'
        })
        for (const ele in themeTpl.inline) {
            if (themeTpl.inline.hasOwnProperty(ele)) {
                const style = themeTpl.inline[ele]
                if (ele === 'codespan') {
                    style['font-family'] = FONT_FAMILY_MONO
                }
                mapping[ele] = this.COPY(base, style)
            }
        }
        for (const ele in themeTpl.block) {
            if (themeTpl.block.hasOwnProperty(ele)) {
                const style = themeTpl.block[ele]
                if (ele === 'code') {
                    style['font-family'] = FONT_FAMILY_MONO
                }
                mapping[ele] = this.COPY(base_block, style)
            }
        }
        return mapping
    }

    S(tokenName) {
        var arr = []
        var dict = this.styleMapping[tokenName]
        for (const key in dict) {
            arr.push(key + ':' + dict[key])
        }
        return 'style="' + arr.join(';') + '"'
    }
    addFootnote(title, link) {
        this.footnoteindex += 1
        this.footnotes.push([this.footnoteindex, title, link])
        return this.footnoteindex
    }
    buildFootnotes() {
        const footnoteArray = this.footnotes.map(function (x) {
            if (x[1] === x[2]) {
                return '<code style="font-size: 90%; opacity: 0.6;">[' + x[0] + ']</code>: <i>' + x[1] + '</i><br/>'
            }
            return '<code style="font-size: 90%; opacity: 0.6;">[' + x[0] + ']</code> ' + x[1] + ': <i>' + x[2] + '</i><br/>'
        })
        return '<h3 ' + this.S('h3') + '>References</h3><p ' + this.S('footnotes') + '>' + footnoteArray.join('\n') + '</p>'
    }
    getWechatRenderer() {
        this.renderer.heading = (text, level) => {
            if (level < 3) {
                return '<h2 ' + this.S('h2') + '>' + text + '</h2>'
            } else {
                return '<h3 ' + this.S('h3') + '>' + text + '</h3>'
            }
        }
        this.renderer.paragraph = (text) => {
            return '<p ' + this.S('p') + '>' + text + '</p>'
        }
        this.renderer.blockquote = (text) => {
            return '<blockquote ' + this.S('blockquote') + '>' + text + '</blockquote>'
        }
        this.renderer.code = (text, infostring) => {
            text = text.replace(/</g, "&lt;")
            text = text.replace(/>/g, "&gt;")

            var lines = text.split('\n')
            var codeLines = []
            var numbers = []
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i]
                codeLines.push('<code><span class="code-snippet_outer">' + (line || '<br>') + '</span></code>')
                numbers.push('<li></li>')
            }
            var lang = infostring || ''
            return '<section class="code-snippet__fix code-snippet__js">'
                + '<ul class="code-snippet__line-index code-snippet__js">' + numbers.join('') + '</ul>'
                + '<pre class="code-snippet__js" data-lang="' + lang + '">'
                + codeLines.join('')
                + '</pre></section>'
        }
        this.renderer.codespan = (text, infostring) => {
            return '<code ' + this.S('codespan') + '>' + text + '</code>'
        }
        this.renderer.listitem = (text) => {
            return '<span ' + this.S('listitem') + '><span style="margin-right: 10px;">•</span>' + text + '</span>'
        }
        this.renderer.list = (text, ordered, start) => {
            if (!ordered) {
                return '<p ' + this.S('ul') + '>' + text + '</p>'
            }
            return '<p ' + this.S('ol') + '>' + text + '</p>'
        }
        this.renderer.image = (href, title, text) => {
            return '<img ' + this.S(this.ENV_STETCH_IMAGE ? 'image' : 'image_org') + ' src="' + href + '" title="' + title + '" alt="' + text + '"/>'
        }
        this.renderer.link = (href, title, text) => {
            if (href.indexOf('https://mp.weixin.qq.com') === 0) {
                return '<a href="' + href + '" title="' + (title || text) + '">' + text + '</a>';
            } else {
                if (this.ENV_USE_REFERENCES) {
                    var ref = this.addFootnote(title || text, href)
                    return '<span ' + this.S('link') + '>' + text + '<sup>[' + ref + ']</sup></span>';
                } else {
                    return '<a href="' + href + '" title="' + (title || text) + '" ' + this.S('link') + '>' + text + '</a>';
                }
            }
        }
        this.renderer.strong = this.renderer.em = (text) => {
            return '<strong ' + this.S('strong') + '>' + text + '</strong>';
        }
        this.renderer.table = (header, body) => {
            return '<table ' + this.S('table') + '><thead ' + this.S('thead') + '>' + header + '</thead><tbody>' + body + '</tbody></table>';
        }
        this.renderer.tablecell = (text, flags) => {
            return '<td ' + this.S('td') + '>' + text + '</td>';
        }
        return this.renderer
    }
}