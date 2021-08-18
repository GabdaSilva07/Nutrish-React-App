import "./App.css";
import React, {useState} from "react";
import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Separator from "./Components/Separator";
import Registration from "./Components/Registration";
import RecipeDetail from "./Components/RecipeDetail";

function App() {

  const [token, setToken] = useState('')

  const userLogin = (token) => {
    setToken(token)
    console.log(token);
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <Separator />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login">
            <Login userLogin={userLogin}/>
          </Route>
          <Route path="/registration" component={Registration} />
          <Route path="/recipe/:id" component={RecipeDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
