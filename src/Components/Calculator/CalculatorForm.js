import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Button,
  Container,
  Typography,
  Paper,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Link, useHistory } from "react-router-dom";
import {
  activityLevel,
  goals,
  approach,
  gender,
} from "../Common/Fitness&Health";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { userMetricsActionCreator } from "../Store/Actions";

export const useStyles = makeStyles((theme) => ({
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
  writing: {
    color: "black",
    textAlign: "left",
  },
  heading: {
    textAlign: "center",
  },
  grid: {
    alignContent: "centre",
  },
}));

export default function CalculatorForm() {
  const user = useSelector((state) => state.userMetricsReducer);
  const dispatch = useDispatch();
  const { getUserMetrics } = bindActionCreators(
    userMetricsActionCreator,
    dispatch
  );

  const history = useHistory()

  const classes = useStyles();
  const [UserMetrics, setUserMetrics] = useState({
    loaded: false,
    gender: "",
    age: null,
    height: null,
    weight: null,
    activityLevel: "",
    goal: "",
    approach: "",
  });
  const onChange = (e) =>
    setUserMetrics({ ...UserMetrics, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(UserMetrics);
    getUserMetrics(UserMetrics);
    history.push("/results")
  };




  const results = (<CalculatorForm/>)

  const calculatorForm = (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Calculator
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                value={UserMetrics.age}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="height"
                label="Height in CM"
                id="height"
                value={UserMetrics.height}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="weight"
                label="Weight in KG"
                id="weight"
                value={UserMetrics.weight}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="tags-outlined"
                onChange={(event, value) => (UserMetrics.gender = value)}
                options={gender}
                getOptionLabel={(option) => option}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    required
                    fullWidth
                    name="gender"
                    label="Gender"
                    type="gender"
                    id="gender"
                    autoComplete="gender"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="tags-outlined"
                onChange={(event, value) => (UserMetrics.activityLevel = value)}
                options={activityLevel}
                getOptionLabel={(option) => option}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Activity Level"
                    fullWidth
                    name="activityLevel"
                    label="Activity Level"
                    type="activityLevel"
                    id="activityLevel"
                    autoComplete="activityLevel"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="tags-outlined"
                options={goals}
                onChange={(event, value) => (UserMetrics.goal = value)}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    required
                    fullWidth
                    name="goals"
                    label="Goal"
                    type="goals"
                    id="goals"
                    autoComplete="goals"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="tags-outlined"
                options={approach}
                onChange={(event, value) => (UserMetrics.approach = value)}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    required
                    fullWidth
                    name="approach"
                    label="Approach"
                    type="approach"
                    id="approach"
                    autoComplete="approach"
                  />
                )}
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
            Calculate
          </Button>
        </form>
      </div>
    </Container>
  );

  return <div>{calculatorForm}</div>;
}
