import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createUser } from "./Store/Actions/users";
import { useHistory, Link } from "react-router-dom";
import { compose } from "redux";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});
//TODO: Change this to to Materia UI

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

//TODO Add Fields for user registration

export class Registration extends Component {
  state = {
    // first_name:"",
    user_name: "",
    email: "",
    password: "",
    diet: "",
    intolerance: "",
    favourite1: "",
    favourite2: "",
    favourite3: "",
    loginURL: "/login",
  };

  static propTypes = {
    createUser: PropTypes.func.isRequired,
    loginURL: PropTypes.string,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    const {
      user_name,
      email,
      password,
      diet,
      intolerance,
      favourite1,
      favourite2,
      favourite3,
    } = this.state;
    const user = {
      user_name,
      email,
      password,
      diet,
      intolerance,
      favourite1,
      favourite2,
      favourite3,
    };
    this.props.createUser(user);

    console.log(user);
    if (user.user_name || user.email || user.password !== "") {
      // this.props.history.push("/inforegistration");
    }

    this.setState({
      user_name: "",
      email: "",
      password: "",
      diet: "",
      intolerance: "",
      favourite1: "",
      favourite2: "",
      favourite3: "",
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="user_name"
                  label="Username"
                  name="user_name"
                  autoComplete="user_name"
                  value={this.state.user_name}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="diet"
                  label="Diet Type"
                  type="diet"
                  id="diet"
                  autoComplete="diet"
                  value={this.state.diet}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="intolerance"
                  label="Intolerance (separate using commas)"
                  type="intolerance"
                  id="intolerance"
                  autoComplete="current-password"
                  value={this.state.intolerance}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="favourite1"
                  label="Favourite Cuisine 1"
                  type="favourite1"
                  id="favourite1"
                  autoComplete="favourite1"
                  value={this.state.favourite1}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="favourite2"
                  label="Favourite Cuisine 2"
                  type="favourite2"
                  id="favourite2"
                  autoComplete="favourite2"
                  value={this.state.favourite2}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="favourite3"
                  label="Favourite Cuisine 3"
                  type="favourite3"
                  id="favourite3"
                  autoComplete="favourite3"
                  value={this.state.favourite3}
                  onChange={this.onChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={7}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default compose(
  connect(null, { createUser }),
  withStyles(useStyles)
)(Registration);
