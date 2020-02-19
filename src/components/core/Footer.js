import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <footer>
      <MDBFooter className="nav-footer font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Footer Content</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="https://playhearthstone.com/en-us/">
                    Hearthstone Official
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="https://hearthstoneapi.com/">Hearthstone API</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid></MDBContainer>
          <CreativeCommons />
        </div>
      </MDBFooter>
    </footer>
  );
};

const CreativeCommons = () => {
  return (
    <div className="px-2 py-2">
      <a
        rel="license"
        href="https://creativecommons.org/publicdomain/zero/1.0/"
      >
        <img
          alt="Creative Commons License"
          style={{ "border-width": 0 }}
          src="https://licensebuttons.net/p/zero/1.0/88x31.png"
        />
      </a>
      <br />
      This work is released into the public domain under the{" "}
      <a
        rel="license"
        href="https://creativecommons.org/publicdomain/zero/1.0/"
      >
        Creative Commons CC0 Public Domain Dedication
      </a>
      . These are derived artworks based on graphics that appear in the game
      Hearthstone &copy; Blizzard Entertainment. Use of these artworks must
      comply with the relevant terms and conditions set out by Blizzard
      Entertainment.
    </div>
  );
};

export default Footer;
