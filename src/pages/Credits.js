import React, { Component } from "react";

class Credits extends Component {
  state = {
    artists: [{ name: "Loading" }],
    loadingText: "."
  };

  createArtistList = () => {
    return (
      <ul>
        {this.state.artists.map(artist => {
          return <li>{artist.name}</li>;
        })}
      </ul>
    );
  };

  render() {
    return (
      <section id="credits-page" className="bg-info">
        <header>
          <h1>Credits</h1>
          <hr />
        </header>

        <div id="tech-stack-area">
          <header>
            <h2>Tech Stack</h2>
          </header>
          <ul>
            <li>Ruby on Rails (backend API)</li>
            <li>React.js (frontend application)</li>
            <li>NPM for Package Management</li>
            <li>PostgresSQL</li>
            <li>Deckstrings (Deck code decoder/encoder)</li>
          </ul>
        </div>

        <div id="sources">
          <header>
            <h2>Sources</h2>
          </header>
          <ul>
            <li>Hearthstone API (card data)</li>
          </ul>
        </div>

        <div id="art-area">
          <header>
            <h2>Images and Icons</h2>
          </header>
          <ul>
            <li>MDBReact</li>
            <li>Blizzard Entertainment (Hearthstone Art)</li>
            <li>Deckstrings (Deck code decoder/encoder)</li>
            <li>
              <a href="https://github.com/HearthSim/hs-icons">
                HearthSim & andburn
              </a>{" "}
              who's Hearthstone Icons made this site work, please check them out
            </li>
          </ul>
          <h2>The Great Artists of Hearthstone</h2>
          {this.createArtistList()}
        </div>

        <div>Created by Martin Spicuzza, 2020</div>
      </section>
    );
  }
}

export default Credits;
