import React from "react";
import Login from "./components/Login/login";
import Home from "./components/studentManager/studentHome";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" exact component={Login} />
          <Route path="/home" exact component={Home}/>
        </Switch>
      </Router>
    );
  }
}
export default App;
