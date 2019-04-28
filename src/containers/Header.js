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
      <div className="header">
        <Link to="/home">
          <img src="../assets/logo.png" className="logo-img" />
          <span className="logo-name">Unicornios</span>
        </Link>
        <div className="menu">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>

      <Route
        exact path={["/", "/home"]}
        render={(props) => <Home {...props} 
        list={list} clickHandler={clickHandler} 
        />}
      />
      <Route exact path="/about" component={About}/>
      <Route 
          path={["/view/:id", "/unicorn/:id", "/view/:unicornio" ]}
          render={(props) => 
            <View {...props} 
              list={list} clickHandler={clickHandler} 
            />}
        />
    </div>
  )
}

export default Header