import React, { useEffect, useState } from "react";
import logo from "../logo.jpg";
import userLogo from "../User.png";
import "./CSS/Nav.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";
import Grid from "@mui/material/Grid";

// import { Button } from "bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { authActionCreator } from "./Store/Actions/index";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(yellow[600]),
  "&:hover": {
    backgroundColor: "#efcb37",
  },
}));

//TODO: Add Search Bar

const navStyle = {
  color: "black",
  textDecoration: "none",
  display: "flex",
};

function Nav() {
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const { login, logout, loadUsers } = bindActionCreators(
    authActionCreator,
    dispatch
  );

  const authLinks = (
    <Link to="/">
      <ColorButton onClick={logout} variant="text" size="small">
        logout
      </ColorButton>
    </Link>
  );

  const guestLinks = (
    <Link to="/login">
      <img className="user_logo" src={userLogo} alt="User logo" />
    </Link>
  );
  return (
    <div className={`Nav`}>
      <Link to="/">
        <img className="logo" src={logo} alt="Nutrish Logo" />
      </Link>

      <div className="separator1" />

      <ul className="navLinks">
        <Link style={navStyle} to="/">
          <li>Recipes</li>
        </Link>
        <Link style={navStyle} to="/calculator">
          <li>Calculator</li>
        </Link>
        <Link style={navStyle} to="/mealplan">
          <li>Meal Plan</li>
        </Link>
        <Link style={navStyle} to="/exercise">
          <li>Exercise Library</li>
        </Link>
      </ul>

      {auth.isAuthenticated ? authLinks : guestLinks}
      <div className="separator2" />
    </div>
  );
}

export default Nav;
