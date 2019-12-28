import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography, Collapse } from "@material-ui/core";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link,BrowserRouter,Redirect } from "react-router-dom";
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    size: "small",
    position:"relative",
    left:"1100px",
  },
  input: {
    display: "none"
  },
  root:{
    width:'100%',
    maxWidth:'xs',
    backgroundColor: theme.palette.background.paper,
  },
  nested:{
    paddingLeft: theme.spacing(4),
  },
  nested2:{
    paddingLeft: theme.spacing(6),
  },
  testPos:{
    position:"relative",
    left:"900px",
  }
});

function FlatButtons(props,history){
  const { classes } = props;
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Typography variant="h4">
        Danh sách môn kì thi học kì 2019-2020
      </Typography>
      <div>
      <Button 
      variant="contained" 
      className={classes.button}
      color="primary"
      >
        Thêm môn
      </Button>
      </div>
      <List className={classes.root}>
  
        <ListItem button component={Link} to="/homeStudent/dangki" >
          <Typography variant="h5">
           Kì 1 năm học 2019-2020
          </Typography> 
        </ListItem>
      </List>
    </div>
  );
};

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FlatButtons);
