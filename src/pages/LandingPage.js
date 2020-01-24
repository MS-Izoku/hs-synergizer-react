import React, { Component } from "react";
import DeckCardContainer from "../containers/DeckCardContainer";

export default class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      decks: [
        { name: "Deck0", upvotes: 10, set_img: "#", dustCost: 25000 },
        { name: "Deck1", upvotes: 10, set_img: "#", dustCost: 25000 },
        { name: "Deck2", upvotes: 10, set_img: "#", dustCost: 25000 },
        { name: "Deck3", upvotes: 10, set_img: "#", dustCost: 25000 },
        { name: "Deck4", upvotes: 10, set_img: "#", dustCost: 25000 },
        { name: "Deck5", upvotes: 10, set_img: "#", dustCost: 25000 }
      ]
    };
  }
  render() {
    return (
      <section>
        
          <DeckCardContainer decks={this.state.decks} containerName="Hot Decks"/>
      </section>
    );
  }
}
