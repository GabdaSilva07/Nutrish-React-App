import "./App.css";
import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/LoginPage";
import Home from "./Components/Home"
import Separator from "./Components/Separator";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Separator/>
        
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/login" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;