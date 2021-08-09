import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import userLogo from "../User.png";
import "./CSS/Nav.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./LoginPage";

function Nav() {
  return (
    <div className={`Nav`}>
      <img className="logo" src={logo} alt="Nutrish Logo" />

      <img className="user_logo" src={userLogo} alt="User logo" />
    </div>
  );
}
export default Nav;
