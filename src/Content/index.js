import React, { Component } from 'react'
import axios from 'axios'
import marked from 'marked'
import Editor from '../Editor'
import RenderedContent from '../RenderedContent'
import logo from './logo.png'
import './index.css'

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


  render() {
    const { content } = this.state
    return (
      <div>
        <nav className='nav'>
          <div className='nav-wrapper'>
            <a href='/' className='brand-logo brand-logo-container'>
              <img src={logo} alt='test' className='logo' />
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a href='/'>sass</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='row'>
          <div className='col s6'>
            <div className="card card__bg">
              <div className="card-content ">
                <span className="card-title">Card Title</span>
                <Editor content={content} />
              </div>
            </div>
          </div>

          <div className='col s6'          >
            <div className="card card__bg">
              <div className="card-content ">
                <span className="card-title">Card Title</span>
                <RenderedContent content={content}></RenderedContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
