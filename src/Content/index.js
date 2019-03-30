import React, { Component } from 'react'
import axios from 'axios'
import marked from 'marked'
import Editor from '../Editor'
import RenderedContent from '../RenderedContent'
import WechatRender from './render'
import logo from './logo.png'
import './index.css'

export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src_content: undefined,
      dist_content: undefined
    }
  }

  componentDidMount() {
    const render = new WechatRender()
    axios.get('./test.md').then(res => {
      this.setState({ src_content: res.data })
      const dist_content = marked(res.data, { renderer: render.getWechatRenderer() })
      this.setState({ dist_content })
    })
  }


  render() {
    const { src_content, dist_content } = this.state
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
                <span className="card-title">Markdown内容</span>
                <Editor content={src_content} />
              </div>
            </div>
          </div>

          <div className='col s6'          >
            <div className="card card__bg">
              <div className="card-content ">
                <span className="card-title">全选复制或点此复制，然后在公众号编辑器粘贴</span>
                <RenderedContent content={dist_content}></RenderedContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
