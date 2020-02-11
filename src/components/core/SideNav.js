import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import { Link, BrowserRouter as Router } from "react-router-dom";
import {withRouter} from 'react-router'

class SideNav extends Component {
  handleNavToggle = () => {
    this.props.handleNavToggle();
  };

  render() {
    return (
      <div id="side-nav-button" onClick={this.handleNavToggle}>
        <MDBIcon icon="bars" className="spinner" size="3x"/>
      </div>
    );
  }
}

export default SideNav;
