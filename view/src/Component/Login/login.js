import React from 'react'
import styles from './login.module.css'
import Home from '../homeStudent/home'
import { Redirect, Link, Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom'
function Login() {
    return (
        <div>
            <div className={styles.App}>
                <div>
                    <p>ABC UNI</p>
                    <p>Online Testing</p>
                    <h1>LOGIN</h1>
                </div>

                <div className={styles.inputContainer}>
                    <input type="text" placeholder="Username" />
                    <i className="z"></i>
                </div>

                <div className={styles.inputContainer2}>
                    <input type="password" placeholder="Password" />
                    <i className="z"></i>
                    <Link to='/home'>
                        <button type='button' className=''>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login