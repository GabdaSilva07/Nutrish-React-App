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

//! Alert options

const AlertOptions = {
  timeout: 5000,
  position: "top center",
};
function App() {
  const [token, setToken] = useState("");

  const userLogin = (token) => {
    setToken(token);
    console.log(token);
  };

  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...AlertOptions}>
        <Router>
          <div className="App">
            <Nav />
            <Alerts/>
            <Separator />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login">
                <Login userLogin={userLogin} />
              </Route>
              <Route path="/registration" component={Registration} />
              <Route path="/recipe/:id" component={RecipeDetail} />
              <Route path="/userspage" component={UsersPage} />
            </Switch>
          </div>
        </Router>
      </AlertProvider>
    </Provider>
  );
}

export default App;
