import React, { Component } from 'react'

export default class A2HS extends Component {
  constructor(props) {
    super()
    this.state = {
      showTip: false,
      deferredPrompt: undefined
    }
  }

  componentDidMount() {
    window.addEventListener('beforeinstallprompt', function(e) {
      e.preventDefault()
      this.setState({ deferredPrompt: e, showTip: true })
    })
  }

  handleClick = () => {
    this.setState({ showTip: false })
    const { deferredPrompt } = this.state
    deferredPrompt.prompt()
    deferredPrompt.userChoice.then(function(choiceResult) {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt')
      } else {
        console.log('User dismissed the A2HS prompt')
      }
      this.setState({ deferredPrompt: null })
    })
  }

  render() {
    const { showTip } = this.state
    if (showTip) {
      return (
        <div
          className='  grey lighten-3 center-align'
          style={{
            position: 'fixed',
            bottom: 0,
            height: '100px',
            left: 0,
            right: 0,
            backgroundColor: '#000',
            zIndex: 1000
          }}
        >
          <p style={{ fontSize: '30px' }}>
            添加 wechat-editor 到您的桌面
            <span
              className='waves-effect waves-light btn  blue  darken-2 '
              style={{ marginLeft: '10px', marginTop: '-10px' }}
            >
              添加
            </span>
          </p>
        </div>
      )
    } else {
      return null
    }
  }
}
