import React, {Component} from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';

import Login from './components/Login/login';
import './App.css';

class App extends Component {
  render() {
    return (
      /*<div className="App">
        <div>
          <p>ABC UNI</p>
          <p1>Online Testing</p1>
          <h1>Exam Registration System</h1>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Username" required/>
          <i class="zmdi zmdi-account zmdi-hc-lg"></i>
        </div>
        <div className="input-container-2">
          <input type="password" placeholder="Password" required/>             
          <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
          <button type="submit">Log In</button>
        </div>      
      </div> */
      <Router>
        <div className = "App">
          <Route exact path = "/login" component = {Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
