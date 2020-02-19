import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideNav from "./SideNav";
import UserNav from "./UserNav";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Header = props => {
  return (
    <Router>
      <div className="nav-header-wrapper">
        <header className="nav-header">
          <SideNav handleNavToggle={props.handleNavToggle} />
          <PageLogo history={props.history}/>
          <UserNav />
        </header>
      </div>
    </Router>
  );
};

const PageLogo = props => {
  const logo = "https://image.flaticon.com/icons/png/512/36/36285.png";
  return (
    <Link
      to="/"
      onClick={(event) => {
        event.preventDefault();
        props.history.push("/");
      }}
    >
      <div className="nav-header logo">
        <img src={logo} id="site-logo" alt="logo" />
      </div>
    </Link>
  );
};

export default withRouter(Header);
