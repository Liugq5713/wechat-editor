import React, { Component } from 'react'
import axios from 'axios'
import marked from 'marked'
import Editor from '../Editor'
import logo from './logo.svg'

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
        <nav>
          <div class='nav-wrapper'>
            <a href='/' className='brand-logo'>
              <img src={logo} alt='test' />
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a href='/'>sass</a>
              </li>
              <li>
                <a href='/'>
                  sass <span className='new badge'>4</span>
                </a>
              </li>
              <li>
                <a href='/'>sass</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='row'>
          <div className='col s6'>
            <Editor content={content} />
          </div>
          <div
            className='col s6'
            dangerouslySetInnerHTML={this.createMarkup(content)}
          />
        </div>
      </div>
    )
  }
}
