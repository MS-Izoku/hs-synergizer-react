import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import SideNav from "./SideNav";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      pages: ["home", "deck-builder", "about-us", "forums", "news"],
      currentPage: "home"
    };
  }

  toggleSideNav = () =>{

  }

  userDropdown = () => {
    return (
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBDropdown>
            <MDBDropdownToggle nav caret>
              <MDBIcon icon="user" size="2x"/>
            </MDBDropdownToggle>
            <MDBDropdownMenu className="dropdown-default">
              <MDBDropdownItem href="#!">Profile</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
      </MDBNavbarNav>
    );
  };
  render() {
    return (
      <header className="nav-header-container flex">
        <Router>
          <MDBNavbar
            className="nav-header"
            dark
            expand="md"
            fixed="top"
          >
            <span id="side-nav-toggle"><MDBIcon icon="bars" size="2x" onClick={this.toggleSideNav}/></span>
            <a href="#" id="site-logo" ><img src="#" alt="site-logo" /></a>
            {/* This will interact with React Router Later */}
            {this.userDropdown()}
          </MDBNavbar>
        </Router>
      </header>
    );
  }
}

export default Header;
