import React, { Component } from 'react';
import Header from './Header'
// import List from '../components/list/List'
import Comments from './Comments';

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


  updateTask=(e)=>{
    // console.log(e.target.value);
    this.setState({
      task: e.target.value
    })
    if(e.key==='Enter'){
      this.addTaskToList()
    }
  // update.this.state.task
  }
  
  // Agregar función para añadir comentario
addTaskToList=()=>{
  // add task to this.state.list
  if (this.state.task){
  let newList=this.state.list
  
  newList.push({
    task: this.state.task,
    completed: false,
    likeCounter:0
  })

  this.setState({
    task:'',
    list:newList
  })
  }
  
}

removeItemFromList=(index)=>{
  let newList=this.state.list
  
  newList.splice(index, 1)
  this.setState({
    list:newList
  })
  }
  
  likeSubmitter=(index)=>{
    let newList=this.state.list
  
    newList[index].likeCounter++
    this.setState({
      list: newList
    })
  
  }
  
  
  markTaskCompleted=(index)=>{
    let newList=this.state.list
  
    newList[index].completed=!newList[index].completed
  
    this.setState({
      list: newList
    })
  }
// AGregar funcion para dar like

  render() {
    console.log('Abriendo el App');
    
      return (
      <div className="container">
        <Header 
        clickHandler={this.goToView}
        list={this.state.list}
        />
        
        <Comments
          listItems={this.state.list}
          removeItemFromList={this.removeItemFromList} 
          markTaskCompleted={this.markTaskCompleted}
          likeSubmitter={this.likeSubmitter}
          />
      </div>
      );
  }
}

export default App;
