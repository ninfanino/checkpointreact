import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header'
import View from './View';


import gaticornio from '../Images/gaticornio.jpg'
import gaticorniotxt from '../Legends/gaticornio.txt'
import ornitorrincornio from '../Images/ornitorrincornio.jpg'
import ornitorrincorniotxt from '../Legends/gaticornio.txt'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      list: [
        {  
          unicorn: 'Gaticornio',
          image:'./gaticornio.jpg',
          text:'./gaticornio.txt',
          id:'1',
          comments: []
        },
        {
          unicorn: 'Ornitorrincornio',
          image:'./ornitorrincornio.jpg',
          text:'./gaticornio.txt',
          id:'2',
          comments: []
        }
      ],
      task: ''
    }    
  }

  render() {
      return (
        <Header 
        clickHandler={this.goToView}
        list={this.state.list}
        />
      );
  }
}

export default App;
