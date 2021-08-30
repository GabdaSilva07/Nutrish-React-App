import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import userLogo from "../User.png";
import "./CSS/Nav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { Button } from "bootstrap";
import axiosInstance from "./Store/Actions/users";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { authActionCreator } from "./Store/Actions/index";

//TODO: Add Search Bar

const navStyle = {
  color: "black",
  textDecoration: "none",
  display: "flex",
};

function Nav(){

    const auth = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const { login, logout, loadUsers } = bindActionCreators(
      authActionCreator,
      dispatch
    );

    const authLinks = (
      <Link to="/logout">
        <button onClick={logout} className="logoutBTN">logout</button>
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
        {auth.isAuthenticated ? authLinks : guestLinks}
        <div className="separator2" />
      </div>
    );
  
}


export default Nav;
