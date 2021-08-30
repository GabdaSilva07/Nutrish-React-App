import "./App.css";
import React, { useState, Fragment } from "react";
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
import PrivateRoute from "./Components/Common/PrivateRoute"
import { loadUsers } from "./Components/Store/Actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { authActionCreator } from "./Components/Store/Actions/index";
import UserInfoRegistration from "./Components/UserInfoRegistration"

//! Alert options

const AlertOptions = {
  timeout: 5000,
  position: "top center",
};

function App () {

  const auth = useSelector((state) => state.authReducer)
  const dispatch = useDispatch()
  const {login, logout, loadUsers} = bindActionCreators(authActionCreator, dispatch)

  // console.log(auth)
  // console.log(login);

  return (
    <AlertProvider template={AlertTemplate} {...AlertOptions}>
      <Router>
        <div className="App">
          <Nav />
          <Alerts />
          <Separator />
          <Switch>
            {}
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/recipe/:id" component={RecipeDetail} />
            <Route path="/userspage" component={UsersPage} />
            <Route path="/inforegistration" component={UserInfoRegistration}/>
          </Switch>
        </div>
      </Router>
    </AlertProvider>
  );
}

export default App;
