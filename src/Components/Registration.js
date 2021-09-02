import React, { useState } from "react";
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
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { usersActionCreator } from "./Store/Actions/index";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
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

function Registration() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { getUsers, updateUser, createUser, logoutUser } = bindActionCreators(
    usersActionCreator,
    dispatch
  );

  const [userInfo, setUserInfo] = useState({
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
  });

  const onChange = (e) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
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
    } = userInfo;
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

    
    const isEmpty = Object.values(user).every((x) => x === null || x === "");

    if (isEmpty === true) {
      // createUser(user);
      console.log(user)
      
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
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
                value={userInfo.user_name}
                onChange={onChange}
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
                value={userInfo.email}
                onChange={onChange}
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
                value={userInfo.password}
                onChange={onChange}
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
                value={userInfo.diet}
                onChange={onChange}
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
                value={userInfo.intolerance}
                onChange={onChange}
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
                value={userInfo.favourite1}
                onChange={onChange}
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
                value={userInfo.favourite2}
                onChange={onChange}
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
                value={userInfo.favourite3}
                onChange={onChange}
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

export default compose(withStyles(useStyles))(Registration);
