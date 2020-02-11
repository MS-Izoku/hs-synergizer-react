import React, { Component } from "react";
import { MDBIcon } from "mdbreact";

class UserNav extends Component {
  state = {
    collapsed: true
  }


render() {
    return (
      <div id="user-nav">
        <MDBIcon icon="user-circle" size="3x"/>
      </div>
    );
  }
}

export default UserNav;