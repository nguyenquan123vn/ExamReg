import React from 'react'
import './login.css'
import Home from '../studentManager/studentHome'
import UserCircle from '@material-ui/icons/AccountCircle'
import LockIcon from '@material-ui/icons/Lock';
import { Redirect, Link, Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom'
class Login extends React.Component {
    render() {
        return (
            <div className="App">

                <div className="input-container">
                    <input type="text" placeholder="Username" />
                    <UserCircle className='iconLogin' />
                </div>

                <div className="input-container">
                    <input type="password" placeholder="Password" />
                    <LockIcon className='iconLogin' />
                </div>

                <Link to='/home'>
                    <button type='button'>Login</button>
                </Link>
            </div>
        )
    }
}

export default Login; 