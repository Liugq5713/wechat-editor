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

  componentDidMount(){
    axios.get('./test.md').then(res => {
      const content = marked(res.data)
      this.setState({ content })
    })
  }

  render() {
    const {content} = this.state
    return (
      <div>
        <Editor content={content}/>
        <h1>hello</h1>
      </div>
    )
  }
}
