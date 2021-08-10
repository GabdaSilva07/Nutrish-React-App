import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import userLogo from "../User.png";
import "./CSS/Nav.css";
import { Link } from "react-router-dom";

//TODO: Add Search Bar

function Nav() {
  const navStyle = {
    color: "black",
    textDecoration: "none",
    display: "flex",
  };
  return (
    <div className={`Nav`}>
      <Link to="/">
        <img className="logo" src={logo} alt="Nutrish Logo" />
      </Link>

      <div className="separator1" />
      <ul className="navLinks">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/">
          <li>Recipes</li>
        </Link>
        <Link style={navStyle} to="/">
          <li>Takeaway</li>
        </Link>
        <Link style={navStyle} to="/">
          <li>About</li>
        </Link>
      </ul>
      <Link to="/login">
        <img className="user_logo" src={userLogo} alt="User logo" />
      </Link>
      <div className="separator2" />
    </div>
  );
}
export default Nav;
