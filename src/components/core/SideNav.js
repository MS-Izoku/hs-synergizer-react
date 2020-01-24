import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBIcon, MDBBtn } from "mdbreact";

class SideNav extends Component {
  state = {
    collapsed: true
  }


render() {
    return (
      <Router>
          <div id="side-nav">
              Wello
          </div>
      </Router>
    );
  }
}

export default SideNav;