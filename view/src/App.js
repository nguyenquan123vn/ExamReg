import React, {Component} from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';

import Login from './components/Login/login';
import Home from './components/studentManager/studentHome'

//import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Login/>
                </Route>
                <Route path='/home'>
                    <Home/>
                </Route>
             </Switch>
            </Router >

    )
  }
}

export default App;
