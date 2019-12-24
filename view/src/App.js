import React, {Component} from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';

import Login from './Component/Login/login'
import Home from './Component/homeStudent/homeStudent'

//import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Redirect exact from = '/' to = 'login'/>
                <Route exact path='/login' exact component={Login}/>
                <Route path='/home' exact component={Home}/>
             </Switch>
            </Router >

    )
  }
}

export default App;
