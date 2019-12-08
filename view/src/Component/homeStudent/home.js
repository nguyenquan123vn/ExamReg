import React from 'react';
import styles from './homeStyle.module.css'
import { push as Menu } from 'react-burger-menu';
import './styles.css'
class Login extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        return (
            <div className={styles.homeLogin}>
              <div>
              <h1 className={styles.headerHome}>Hệ thống thi trắc nghiệm online ABCUni Test</h1>
                <Menu>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
                </Menu>
                </div>
            </div>
        );
    }
}
export default Login;