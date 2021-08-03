import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import userLogo from "../User.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`Nav ${show && "Nav_white"}`}>
      <img className="logo" src={logo} alt="Nutrish Logo" />

      <img className="user_logo" src={userLogo} alt="User logo" />
    </div>
  );
}

export default Nav;
