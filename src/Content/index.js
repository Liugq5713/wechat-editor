import React, { Component } from 'react'
import axios from 'axios'
import marked from 'marked'
import Editor from '../Editor'

export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: undefined
    }
  }

  componentDidMount() {
    axios.get('./test.md').then(res => {
      const content = marked(res.data)
      this.setState({ content })
    })
  }
  createMarkup = content => {
    return { __html: content }
  }

  render() {
    const { content } = this.state
    return (
      <div>
        <div className='row'>
          <div className='col s6'>
            <Editor content={content} />
          </div>
          <div
            className='col s6'
            dangerouslySetInnerHTML={this.createMarkup(content)}
          />
        </div>
        <h1>hello</h1>
      </div>
    )
  }
}
