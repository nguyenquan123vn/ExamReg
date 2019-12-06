import React from 'react';
import Login from './login.js'
import Home from './home.js'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { watchFile } from 'fs';

class App extends React.Component {
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
