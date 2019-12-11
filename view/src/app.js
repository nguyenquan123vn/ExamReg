import React from 'react';
import Login from './Component/Login/login'
import Home from './Component/homeStudent/home'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

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
