import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideNav from "./SideNav";

const Header = () => {
  const toggleSideNav = () => {};
  const logo = "https://image.flaticon.com/icons/png/512/36/36285.png";

  return (
    <Router>
      <div className="nav-header-wrapper">
        <header className="nav-header">
          <div className="left link">SIDEBAR</div>
          <div className="nav-header logo">
            <img src={logo} id="site-logo" />
          </div>
          <div className="right link">USER</div>
        </header>
      </div>
    </Router>
  );
};

export default Header;
