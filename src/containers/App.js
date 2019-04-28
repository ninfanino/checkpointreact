import React, { Component } from 'react';
import Header from './Header'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      list: [
        {  
          unicorn: 'Gaticornio',
          image:'../assets/gaticornio.jpg',
          text:'../assets/gaticornio.txt',
          id:'1',
          comments: []
        },
        {
          unicorn: 'Ornitorrincornio',
          image:'../assets/ornitorrincornio.jpg',
          text:'../assets/gaticornio.txt',
          id:'2',
          comments: []
        }
      ],
      task: ''
    }    
  }

  render() {
    console.log('Abriendo el App');
    
      return (
        <Header 
        clickHandler={this.goToView}
        list={this.state.list}
        />
      );
  }
}

export default App;
