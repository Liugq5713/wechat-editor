import React, { Component } from 'react'
import axios from 'axios'
import marked from 'marked'
import RenderedContent from '../RenderedContent'
import Nav from '../Nav'
import WechatRender from './render'
import theme from './theme'

import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src_content: undefined,
      dist_content: undefined,
    }
  }

  setSrcContent = (src_content) => {
    this.setState({ src_content })
  }

  renderContent = (content) => {
    const builtinFonts = [
      { label: '衬线', value: 'serif', fonts: "Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" },
      { label: '无衬线', value: 'sans-serif', fonts: "Roboto, Oxygen, Ubuntu, Cantarell, PingFangSC-light, PingFangTC-light, 'Open Sans', 'Helvetica Neue', sans-serif" }
    ]
    const render = new WechatRender({ theme, fonts: builtinFonts[0] })
    let dist_content = marked(content, { renderer: render.getWechatRenderer() })
    if (render.hasFootnotes()) {
      dist_content += render.buildFootnotes()
    }
    this.setState({ dist_content })
  }
  componentDidMount() {
    const editorContainer = document.getElementById('editorContainer')

    axios.get('./test.md').then(res => {
      this.setState({ src_content: res.data })
      this.renderContent(res.data)
      const editor = CodeMirror.fromTextArea(editorContainer, {
        value: res.data,
        lineNumbers: true,
        lineWrapping: true,
        theme: 'monokai',
        styleActiveLine: true,
        mode: 'text/x-markdown'
      })
      editor.setSize('100%', '100%')
      editor.on("change", (cm, change) => {
        this.renderContent(editor.getValue())
        setTimeout(() => {
          editor.refresh();
        }, 0);
      })
    })
  }


  render() {
    const { src_content, dist_content } = this.state
    return (
      <div>
        <Nav />
        <div className='row'>
          <div className='col s6'>
            <div className="card card__bg">
              <div className="card-content ">
                <span className="card-title">Markdown内容</span>
                <textarea
                  id='editorContainer'
                  value={src_content}
                  onChange={this.handlerChange}
                />
              </div>
            </div>
          </div>
          <div className='col s6'>
            <RenderedContent content={dist_content} />
          </div>
        </div >
      </div >
    )
  }
}
