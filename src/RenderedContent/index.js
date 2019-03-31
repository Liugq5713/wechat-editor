import React, {
    Component
} from 'react'
export default class Content extends Component {
    createMarkup = content => {
        return {
            __html: content
        }
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
                M.toast({ html: '已复制到剪贴板' })// eslint-disable-line
            } else {
                M.toast({ html: '未能复制到剪贴板，请全选后右键复制' })// eslint-disable-line
            }
        } catch (err) {
            M.toast({ html: '未能复制到剪贴板，请全选后右键复制' })// eslint-disable-line
        }
    }
    render() {
        const {
            content
        } = this.props
        return (
            <div className="card card__bg">
                <div className="card-content ">
                    <span className="card-title">
                        <span onClick={this.copy} class="waves-effect waves-light btn">点此复制，然后在公众号编辑器粘贴</span>
                    </span>
                    <div id='output'>
                        <div dangerouslySetInnerHTML={
                            this.createMarkup(content)
                        } />
                    </div>
                </div>
            </div>
        )
    }
}