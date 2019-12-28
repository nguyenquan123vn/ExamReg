import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./studentHome.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { withRouter } from "react-router-dom";
//add style
const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};
function studentHome({ classes, history }) {
  function logout() {
    history.push("/")
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
          <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Hệ thống thi ABC-ONLINE
          </Typography>
          <ExitToAppIcon />
          <Button color="inherit" onClick={logout}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

studentHome.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(studentHome);
