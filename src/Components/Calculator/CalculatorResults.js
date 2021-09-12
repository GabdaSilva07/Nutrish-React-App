import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Container,
  Typography,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { dailyMacros } from "jp-healthmeasurements";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { userMetricsActionCreator } from "../Store/Actions";

const calculate = require("fitness-health-calculations");

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

export default function CalculatorResults() {
  const user = useSelector((state) => state.userMetricsReducer);
  const classes = useStyles();
  const [userIdealWeight, setUserIdealWeight] = useState();
  const [userCaloriesNeeded, setUserCaloriesNeeded] = useState();
  const [userMacros, setUserMacros] = useState({});

  const dispatch = useDispatch();
  const { getUserMacros } = bindActionCreators(
    userMetricsActionCreator,
    dispatch
  );

  useEffect(() => {
    if (user.loaded) {
      let IdealWeight = calculate.idealBodyWeight(user.height, user.gender);
      let caloriesNeeded = calculate.caloricNeeds(
        user.gender,
        user.age,
        user.height,
        user.weight,
        user.activityLevel,
        user.goal,
        user.approach
      );
      let macros = dailyMacros(caloriesNeeded);
      setUserIdealWeight(IdealWeight);
      setUserCaloriesNeeded(caloriesNeeded);
      setUserMacros(macros);
      let userMacroInfo = { userIdealWeight, userCaloriesNeeded, userMacros };
      getUserMacros(userMacroInfo);
    }
  }, [user]);

  const userLoaded = (
    <Container component="main" maxWidth="xs">
      <div>
        <Grid className={classes.grid} item xs={8}>
          <Typography className={classes.heading} variant="h3">
            Results
          </Typography>
          <br />
          <Paper className={classes.paper}>
            <Typography className={classes.writing}>{"BMI: "}</Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography className={classes.writing}>
              {"Ideal Weight: " + userIdealWeight + "KG"}
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography className={classes.writing}>
              {"Daily Calories: " + Math.round(userCaloriesNeeded) + "kcal"}
              <br />
              {"Carbs: " + Math.round(userMacros.cGram) + "g"}
              <br />
              {"Fat: " + Math.round(userMacros.fGram) + "g"}
              <br />
              {"Protein: " + Math.round(userMacros.pGram) + "g"}
            </Typography>
          </Paper>
        </Grid>
      </div>
    </Container>
  );

  return <div>{user.loaded ? userLoaded : <div>User Not Loaded</div>}</div>;
}
