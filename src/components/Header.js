import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import View from './View'

const Header = (props) => {
  let {list, clickHandler} = props
  console.log('Header props', props)
  return(
    <div>
      <h1>Unicornios</h1>
      <hr/>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      {/* <Link to="/view/1">View</Link>
      <Link to="/view/2">View</Link> */}
      <hr/>
      <Route
        path='/home'
        render={(props) => <Home {...props} 
        list={list} clickHandler={clickHandler} 
        />}
      />
      <Route path="/about" component={About}/>
      {/* <Route path="/view/:id" component={View}/> */}
      <Route 
          //path={`/view/${item.id}`}
          path="/view/:id"
          render={(props) => 
            <View {...props} 
              list={list} clickHandler={clickHandler} 
            />}
        />
    </div>
  )
}

export default Header