import React, { Component } from 'react'

export default class Content extends Component {
    constructor() {
        super()
        this.state = {
            editor: undefined,
            tinymceId: '#contentContainer'
        }
    }
    getWordCount() {
        return window.tinymce.get(this.state.tinymceId).plugins.wordcount.getCount()
    }
    // getContent() {
    //     return window.tinymce.get(this.state.tinymceId).getContent()
    // }
    setContent(value) {
        console.log('window.tinymce.get(this.state.tinymceId)', window.tinymce.get(this.state.tinymceId))
        window.tinymce.get(this.state.tinymceId).setContent(value)
    }
    copy = () => {
        var clipboardDiv = document.getElementById('output')
        clipboardDiv.focus();
        window.getSelection().removeAllRanges();
        var range = document.createRange();
        range.setStartBefore(clipboardDiv.firstChild);
        range.setEndAfter(clipboardDiv.lastChild);
        window.getSelection().addRange(range);
        try {
            if (document.execCommand('copy')) {
                M.toast({ html: '已复制到剪贴板' })  //eslint-disable-line
            } else {
                M.toast({ html: '未能复制到剪贴板，请全选后右键复制' })//eslint-disable-line
            }
        } catch (err) {
            M.toast({ html: '未能复制到剪贴板，请全选后右键复制' })//eslint-disable-line
        }
    }
    componentDidMount() {
        console.log('window', window.tinymce)
        window.tinymce.init({
            selector: this.state.tinymceId,
            fontsize_formats: '8px 10px 12px 14px 16px 18px 24px 36px 40px',
            plugins: [
                'advlist autolink lists   charmap print preview anchor textcolor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime  table paste code help wordcount'
            ],
            height: ' 600px'
        })
    }
    componentWillUpdate(props) {
        if (window.tinymce.get(this.state.tinymceId)) {

            const { content } = props
            this.setContent(content)
            this.getWordCount()
        }

    }

    render() {
        const { content } = this.props
        return (
            <div className="card card__bg">
                <div className="card-content ">
                    <span className="card-title">全选复制或<span onClick={this.copy}>点此复制</span>，然后在公众号编辑器粘贴</span>
                    <div id='output'>
                        <textarea
                            id='contentContainer'
                            value={content}
                            onChange={this.handlerChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}