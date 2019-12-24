import React from "react";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withRouter } from "react-router-dom";
import { login } from '../../Controller/Login/Login_func'


const styles = theme => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
        username: "",
        password: "",
        error: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentWillMount(){
    localStorage.setItem('access_token_examreg', '');
  }

  handleChange(event){
    //const { formData } = this.state;
    this.setState({[event.target.name]: event.target.value});
    //this.setState({ formData });
  };

  handleSubmit(event){
    event.preventDefault()

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    login(user).then(response => {
      if(response) {
        this.props.history.push("/home");
      }
    })
  };

  render() {
    const { classes } = this.props;
    return (
      <ValidatorForm
        ref="form"
        onSubmit={this.handleSubmit}
        className={classes.form}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <AccountCircleIcon style={{fill:"white"}} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in to ABCtest
            </Typography>
            <TextValidator
              variant="outlined"
              margin="normal"
              required
              onChange={this.handleChange}
              value={this.state.username}
              validators={["required", "minStringLength:8"]}
              errorMessages={["không được bỏ trống mã số sinh viên", "mã số sinh viên phải  là 8 số"]}
              fullWidth
              id="username"
              label="Username"
              name="username"
            />
            <TextValidator
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
              validators={["required", "minStringLength:6"]}
              errorMessages={[
                "không được để trống mật khẩu",
                "Mật khẩu ít nhất 6 ký tự"
              ]}
              id="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </div>
          <Box mt={8} />
        </Container>
      </ValidatorForm>
    );
  }
}
export default withStyles(styles)(withRouter(SignIn));
