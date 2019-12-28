import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "../../homeStudent/studentHome.css"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { withRouter } from "react-router-dom";
import { createBrowserHistory as createHistory } from 'history'
const styles =makeStyles({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  Typography:{
    htmlFontSize: 19,
  }
})

function ButtonAppBar({history}) {
  function logout() {
    history.push("/homeStudent");
   }
  const  classes  = styles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography  variant="h5" color="inherit" className={classes.flex}>
            Hệ thống thi ABCUni
          </Typography>
          <Button color="inherit" onClick={logout}>
            <ExitToAppIcon/>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (ButtonAppBar);
