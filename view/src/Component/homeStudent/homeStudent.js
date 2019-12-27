import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './routes/routes'
import './studentHome.css';
import Appbar from './homeComponets/Appbar'
class homeStudent extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Appbar/>
        <Routes />
      </React.Fragment>
    );
  }
}

export default homeStudent;
