import React, { Component } from "react";
import { MDBIcon } from "mdbreact";

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
