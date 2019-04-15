import React, { Component } from 'react';
import Header from './Header'
// import Inputs from '../Inputs/Inputs'

import gaticornio from '../Images/gaticornio.jpg'
import gaticorniotxt from '../Legends/gaticornio.txt'
import ornitorrincornio from '../Images/ornitorrincornio.jpg'
import ornitorrincorniotxt from '../Legends/gaticornio.txt'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      list: [],
      task: ''
    }
  }

  renderItems = () =>{
    if( this.state.list.length == 0){
      console.log(' ist length: ', this.state.list.length)
      let newList = this.state.list
 
      newList.push({  
        unicorn: 'Gaticornio',
        image:{gaticornio},
        text:{gaticorniotxt},
        id:'1',
        comments: []
      })
      newList.push({
        unicorn: 'Ornitorrincornio',
        image:{ornitorrincornio},
        text:{ornitorrincorniotxt},
        id:'2',
        comments: []
      })

      this.setState({
        task: '',
        list: newList
      })
    }
  }

  render() {
    this.renderItems()
    //console.log(this.state.list)
    return (
      <Header/>
    );
  }
}

export default App;
