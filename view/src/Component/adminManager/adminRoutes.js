import React from 'react'
import {
  Router,
  Route,
  Link
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';



import Home from '../homeStudent/pages/Home';
import TestedExam from '../homeStudent/pages/TestedExam';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    height:"1000px"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

const history = createBrowserHistory();


const Routes = (props) => {
  const { classes } = props;

  return (
    <div >
      <Router history={history}>
        <div className={classes.root}>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {/* <div className={classes.toolbar} /> */}
            <List>
              <ListItem button component={Link} to="/adTable">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Quản lý kỳ thi" />
              </ListItem>
             
            </List>
          </Drawer>
          <main className={classes.content}>
            
            <Route exact path="/homeStudent" component={Home}/>
            <Route path="/testedExam" component={TestedExam}/>
           
          </main>
        </div>
      </Router>
    </div>
  );
}

Routes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Routes);
