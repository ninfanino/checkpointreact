import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import View from './View'

const Header = (props) => {
  let {list, clickHandler, likeSubmitter, updateTask, task, postComment} = props
  console.log('Header props', props)
  return(
    <div>
      <div className="header">
        <Link to="/home">
          <img src="../assets/logo.png" className="logo-img" />
          <span className="logo-name">Unicornios</span>
        </Link>
        <div className="menu">
          <NavLink to="/home" activeClassName="isSelected">Home</NavLink>
          <NavLink to="/about" activeClassName="isSelected">About</NavLink>
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
                likeSubmitter={likeSubmitter} 
                taskValue={task}
                inputHandler={updateTask}
                postComment={postComment}

            />}
        />
    </div>
  )
}

export default Header