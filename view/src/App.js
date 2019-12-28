import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import adminHome from './Component/adminManager/adminHome'
import Login from './Component/Login/login'
import homeStudent from './Component/homeStudent/homeStudent'


//import PrivateRoute from './proxy/privateRoute';  
//import ComponentRoute from './proxy/ComponentRoute';
//import './App.css';
//<Redirect exact from = '/' to = '/login'/>
//<PrivateRoute path='/'  exact component={ComponentRoute}/>

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Redirect exact from = '/' to = '/login'/>
                <Route exact path='/login'  exact component={Login}/>
                <Route exact path='/homeStudent' exact component={homeStudent}/>
                <Route exact path='/adminHome' exact component = {adminHome} />
                
             </Switch>
        </Router>
    )
  }
}

export default App;
