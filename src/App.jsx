import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import './App.css';
import './css/style.css';
import Home from './pages/Home';
import About from './pages/About';

class App extends Component {

  componentDidMount(){
    
  }

  render() {
    return (
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
