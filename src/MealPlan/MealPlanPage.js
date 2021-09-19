import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  ButtonBase,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useStyles } from "../Components/Registration";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "../axios";
import "../Components/CSS/MealPlan.css";

const base_url = "https://spoonacular.com/recipeImages/";
const image_size = "312x231";
const image_type = "jpg";

function MealPlanPage() {
  const userInfo = useSelector((state) => state.UserReducer);
  const userMetrics = useSelector((state) => state.userMetricsReducer);
  const classes = useStyles();
  const [mealPlan, setMealPlan] = useState({
    meals: [],
    nutrients: {},
  });

  const options = {
    method: "GET",
    url: "recipes/mealplans/generate",
    params: {
      timeFrame: "day",
      targetCalories: userMetrics.calories,
      diet: userInfo.diet,
      exclude: userInfo.intolerance,
    },
  };

  useEffect(() => {
    async function mealPlan() {
      const request = await axios.request(options);
      setMealPlan(request.data);
      console.log(request)
      return request;
    }
    if (userMetrics.loaded) {
      mealPlan();
    }
  }, [userMetrics]);

  console.log(mealPlan);

  // const userInfoLoaded = ()
  const UserInfoNotLoaded = (
    <h2>Please use the Calculator so we can provide the meal plan</h2>
  );

  return (
    <Container component="main" maxWidth="xs">
      <h2>Meal Plan</h2>
      <CssBaseline />
      <Grid container className={classes.paper} spacing={2} gridColumn="span 8">
        {mealPlan.meals.map((meal, index) => (
          <Grid item spacing={2}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                key={meal.id}
                component="img"
                height="300"
                image={`${base_url}${meal.id}-${image_size}.${meal.imageType}`}
                alt={meal.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Meal {index + 1}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {meal.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
    </Container>
  );
}

export default MealPlanPage;

// <Grid item spacing={2} align="center">
//   <Paper
//     item
//     sx={{ margin: "auto", maxWidth: 400, flexGrow: 1 }}
//     align="center"
//   >
//     <Typography variant="h4" gutterBottom align="center">
//       Meal {index + 1}
//     </Typography>
//     <Typography>{meal.title}</Typography>
// 		<Typography>{}</Typography>
//     <img
//       key={meal.id}
//       className="image"
//       src={`${base_url}${meal.id}-${image_size}.${meal.imageType}`}
//       alt={meal.title}
//     />
//   </Paper>
// </Grid>
