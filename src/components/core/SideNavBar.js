import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link, BrowserRouter as Router } from "react-router-dom";
class SideNavBar extends Component {
  goTo = url => {
    this.props.history.push(url);
    return null;
  };

  sideBar = () => (
    <>
      <header>SideNav</header>

      <ul>
        <li>
          <Link
            to="/"
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/deck-builder"
            onClick={() => {
              this.props.history.push("/deck-builder");
            }}
          >
            Deck Builder
          </Link>
        </li>
        <li>
          <Link to="/">Deck Search</Link>
        </li>
        <li>
          <Link to="/">Forums</Link>
        </li>
        <li>
          <Link
            to="/credits"
            onClick={() => {
              this.props.history.push("/credits");
            }}
          >
            Credits
          </Link>
        </li>
      </ul>
    </>
  );
  render() {
    console.log(this.props);
    return (
      <Router>
        {this.props.collapsed === true ? (
          <div id="side-nav">{this.sideBar()}</div>
        ) : null}
      </Router>
    );
  }
}

export default withRouter(SideNavBar);
