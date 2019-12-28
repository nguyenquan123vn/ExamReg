import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AdminRoutes from './adminRoutes'
import './admin.css';
import Appbar from '../homeStudent/homeComponets/Appbar'
import StickyHeadTable from './adminTable/adTable'
class adminHome extends Component {
    render() {
      return (
        <React.Fragment>
          <CssBaseline />
          <Appbar/>
          <AdminRoutes/>
          <StickyHeadTable/>
        </React.Fragment>
      );
    }
  }

  
  export default adminHome;