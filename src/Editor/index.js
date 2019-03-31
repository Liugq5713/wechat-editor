import React, { Component } from 'react'

import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'

export default class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      editor: undefined
    }
  }

  componentDidMount() {
    const editorContainer = document.getElementById('editorContainer')
    const editor = CodeMirror.fromTextArea(editorContainer, {
      lineNumbers: true,
      lineWrapping: true,
      styleActiveLine: true,
      mode: 'text/x-markdown'
    })
    editor.setSize('100%', '100%')
    this.setState({ editor })
  }
  render() {
    const { content } = this.props
    const { editor } = this.state
    if (editor) {
      editor.setValue(content || '')
    }
    return (
      <textarea
        id='editorContainer'
        value={content}
        onChange={this.handlerChange}
      />
    )
  }
}
