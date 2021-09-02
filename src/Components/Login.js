import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { login } from "../Components/Store/Actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { authActionCreator, usersActionCreator } from "./Store/Actions/index";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const { login, logout, loadUsers } = bindActionCreators(
    authActionCreator,
    dispatch
  );

  const history = useHistory();

  const onChange = (e) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userInfo;
    const loginInfo = { email, password };
    login(loginInfo);

    history.push("/");
  };

  // if (this.props.isAuthenticated) {
  //   return <Redirect to="/" />;
  // }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={setUserInfo.email}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={setUserInfo.password}
            onChange={onChange}
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
          <Grid container>
            {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
            <Grid item>
              <Link to="/registration" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}

export default compose(withStyles(useStyles))(Login);
