import React, { Component } from 'react'
import Content from './Content'
class App extends Component {
  componentDidMount(){
    window.addEventListener("beforeinstallprompt", function(e) { 
      // log the platforms provided as options in an install prompt 
      console.log(e.platforms); // e.g., ["web", "android", "windows"] 
      e.userChoice.then(function(outcome) { 
        console.log(outcome); // either "accepted" or "dismissed"
      }); 
    });
  }
  render() {
    return (
      <div className='App'>
        <Content />
      </div>
    )
  }
}

export default App
