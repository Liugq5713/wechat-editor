import React, { Component } from 'react'
import Content from './Content'
import A2HS from './A2HS'
class App extends Component {
  render() {
    return (
      <div className='App'>
        <A2HS />
        <Content />
      </div>
    )
  }
}

export default App
