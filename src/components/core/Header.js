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

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      pages: ["home", "deck-builder", "about-us", "forums", "news"],
      currentPage: "home"
    };
  }

  changePage = (page) => {
    this.setState({currentPage: page})
  };

  isPageActive = id => {
    return this.state.currentPage + "-link" === id;
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar className="nav-header" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">Navbar</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem
                active={this.isPageActive("deck-builder-link")}
                id="deck-builder-link"
              >
                <MDBNavLink to="#!">Deck Builder</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem
                active={this.isPageActive("news-link")}
                id="news-link"
              >
                <MDBNavLink to="#!">News</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem
                active={this.isPageActive("forums-link")}
                id="forums-link"
              >
                <MDBNavLink to="#!">Forums</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem
                active={this.isPageActive("about-us-link")}
                id="about-us-link"
              >
                <MDBNavLink to="#!">About Us</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Something else here
                    </MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Something else here
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Header;
