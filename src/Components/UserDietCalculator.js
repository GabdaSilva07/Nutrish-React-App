import React, { useEffect, useState } from "react";
import useGeolocationHook from "../hooks/useGeolocationHook";
import axiosBMI from "../axiosBMI";
import "./CSS/UserDietCalculator.css";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import CalculatorForm from "./CalculatorForm";
import { Grid, makeStyles, Container, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";



function UserDietCalculator() {
  const auth = useSelector((state) => state.authReducer);






  const calculator = <CalculatorForm />;
  const notAuthenticated = (
    <div className="heading">
      <h2>You must be signed-in to use this feature!</h2>
      <div container>
        <div>
          <Link to="/login">{"Already have an account? Sign in"}</Link>
        </div>
        <div>
          <Link to="/registration">{"Don't have an account? Sign Up"}</Link>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {auth.isAuthenticated ? calculator : notAuthenticated}
    </div>
  );
}

export default UserDietCalculator;

// const options = {
//   method: "GET",
//   url: "https://body-mass-index-bmi-calculator.p.rapidapi.com/metric",
//   params: { weight: UserMetrics.weight, height: UserMetrics.height },
// };

// useEffect(() => {
//   async function fetchData() {
//     const response = (await axiosBMI.request(options)).data;

//     const options1 = {
//       method: "GET",
//       url: "https://body-mass-index-bmi-calculator.p.rapidapi.com/weight-category",
//       params: { bmi: response.bmi },
//     };

//     const response1 = (await axiosBMI.request(options1)).data;

//     setUserMetrics({
//       userLoaded: false,
//       weight: response.weight,
//       height: response.height,
//       bmi: response1.bmi,
//       weightCategory: response1.weightCategory,
//     });
//   }

//   if (UserMetrics.userLoaded) {
//     fetchData();
//   }
// }, [UserMetrics]);
