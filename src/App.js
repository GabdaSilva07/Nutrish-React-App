import "./App.css";
import React, { useState, Fragment, useEffect } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Separator from "./Components/Separator";
import Registration from "./Components/Registration";
import RecipeDetail from "./Components/RecipeDetail";
import { Provider } from "react-redux";
import store from "./Components/Store/Store";
import UsersPage from "./Components/UserPage";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./Components/Layout/Alerts";
import PrivateRoute from "./Components/Common/PrivateRoute";
import { loadUsers } from "./Components/Store/Actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  authActionCreator,
  usersActionCreator,
  userMetricsActionCreator,
} from "./Components/Store/Actions/index";
import UserInfoRegistration from "./Components/UserInfoRegistration";
import HomeAuth from "./Components/HomeAuth";
import { axiosInstance } from "./Components/Store/axiosInstance";
import { ThemeProvider } from "@material-ui/core";
import UserDietCalculator from "./Components/Calculator/UserDietCalculator";
import Footer from "./Components/Footer";
import CalculatorResults from "./Components/Calculator/CalculatorResults";
import MealPlanPage from "./Components/MealPlan/MealPlanPage";
import { createTheme } from "@material-ui/core/styles";
import { getAutoHeightDuration } from "@mui/material/styles/createTransitions";
import { Container } from "@material-ui/core";
import Exercise from "./Components/Exercise/Exercise"

const theme = createTheme({
  palette: {
    primary: {
      main: "#efcb37",
    },
  },
});
//! Alert options
const AlertOptions = {
  timeout: 5000,
  position: "top center",
};

const clearLocalStorage = (axiosInstance) => {
  axiosInstance.defaults.headers["Authorization"] = null;
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

function App() {
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const { getUsers, updateUser, createUser, logoutUser } = bindActionCreators(
    usersActionCreator,
    dispatch
  );
  const { clearUserMacros } = bindActionCreators(
    userMetricsActionCreator,
    dispatch
  );

  useEffect(() => {
    return () => {
      if (auth.isAuthenticated !== true) {
        logoutUser();
        clearUserMacros();
      }
    };
  }, [auth.isAuthenticated]);

  //TODO: Change home component after finishing production
  const homePageNotAuth = <Route exact path="/" component={Home} />;
  const homePageAuth = <Route exact path="/" component={HomeAuth} />;

  return (
    <ThemeProvider theme={theme}>
      <AlertProvider template={AlertTemplate} {...AlertOptions}>
        <Router>
          <div className="App">
            <Nav auth={auth} />
            <Container maxWidth="xl">
              <Alerts />
              <Separator />
              <Switch>
                {auth.isAuthenticated ? homePageAuth : homePageNotAuth}
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route path="/recipe/:id" component={RecipeDetail} />
                <Route path="/userspage" component={UsersPage} />
                <Route
                  path="/inforegistration"
                  component={UserInfoRegistration}
                />
                <Route path="/calculator" component={UserDietCalculator} />
                <Route path="/results" component={CalculatorResults} />
                <Route path="/mealplan" component={MealPlanPage} />
                <Route path="/exercise" component={Exercise} />
              </Switch>
            </Container>
          </div>
        </Router>
      </AlertProvider>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
