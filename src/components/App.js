import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import View from './View';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world2</h1>
        <hr/>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/view/1">View</Link>
        <Link to="/view/2">View</Link>
        <hr/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/view/:id" component={View}/>
      </div>
    );
  }
}

export default App;
