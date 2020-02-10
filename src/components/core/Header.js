import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideNav from "./SideNav";
import UserNav from "./UserNav";

const Header = (props) => {
  const logo = "https://image.flaticon.com/icons/png/512/36/36285.png";

  return (
    <Router>
      <div className="nav-header-wrapper">
        <header className="nav-header">
          <SideNav handleNavToggle={props.handleNavToggle}/>

          <div className="nav-header logo">
            <img src={logo} id="site-logo" />
          </div>
          <UserNav />
        </header>
      </div>
    </Router>
  );
};

export default Header;
