import React from 'react'
import ReactDom from 'react-dom'
import styles from './login.module.css'
import Home from './home'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
export default class Login extends React.Component {
    render() {
        return (

            <div className={styles.App}>
                <div>
                    <p>ABC UNI</p>
                    <p1>Online Testing</p1>
                    <h1>LOGIN</h1>
                </div>
                <div className={styles.input-container}>
                    <input type="text" placeholder="Username" />
                    <i class="zmdi zmdi-account zmdi-hc-lg"></i>
                </div>

                <div className={styles.input-container-2}>
                    <input type="password" placeholder="Password" />

                    <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
                    <Router path='/home' Component={Home}>
                    <button type="submit" >Log In</button>
                    </Router>
                   
                </div>


            </div>
        )
    }
}