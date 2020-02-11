import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link, BrowserRouter as Router } from "react-router-dom";

class SideNavBar extends Component {
  render() {
    return (
      <Router>
        <div
          id="side-nav"
          className={
            (this.props.collapsed === true ? "  " : " ") +
            (this.props.collapsed ? "inactive" : "active")
          }
        >
          <div className={"wrapper " + (this.props.collapsed ? "inactive" : "active")}>
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
                <Link
                  to="/search"
                  onClick={() => {
                    this.props.history.push("/search");
                  }}
                >
                  Deck Search
                </Link>
              </li>
              <li>
                <Link
                  to="/forums"
                  onClick={() => {
                    this.props.history.push("/forums");
                  }}
                >
                  Forums
                </Link>
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
          </div>
        </div>
      </Router>
    );
  }
}

export default withRouter(SideNavBar);
