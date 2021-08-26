import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import userLogo from "../User.png";
import "./CSS/Nav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { Button } from "bootstrap";


//TODO: Add Search Bar



const navStyle = {
  color: "black",
  textDecoration: "none",
  display: "flex",
};

class Nav extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <button className="logoutBTN">logout</button>
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
        {isAuthenticated ? authLinks : guestLinks}
        <div className="separator2" />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Nav);
