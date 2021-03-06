import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './css/style.css'
import Home from './pages/Home'
import About from './pages/About'


class App extends Component{

    render(){
     return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
            </Switch>
        </Router>
     )
    }

}

export default App;