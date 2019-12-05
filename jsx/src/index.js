import React from 'react';
import ReactDOM from 'react-dom';
import './login.module.css'
import Login  from './login'
import Home from './home'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path='/' Component={Login}/>
                <Route path='/home' Component={Home}/>
            </Router>
        )
    }
}

ReactDOM.render(<Login />, document.getElementById('root'));