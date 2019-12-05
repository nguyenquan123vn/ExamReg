import React from 'react';
import ReactDOM from 'react-dom';
import styles from './homeStyle.module.css'
class Home extends React.Component {
    render() {
        return (
            <button className={styles.button}>this button</button>
        )
    }
}
export default Home;