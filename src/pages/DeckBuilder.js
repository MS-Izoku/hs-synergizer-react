import React, { Component } from "react";

//#region components
//#endregion

//#region containers
import DeckViewer from "../containers/DeckBuilder/DeckViewer";
import TCGCardContainer from "../containers/TCGCardContainer";
//#endregion

export default class DeckBuilder extends Component {
  constructor() {
    super();
    this.state = {
      name: "Unnamed Deck",
      deckClass: {
        // populate this with the card class data
        name: "Vanilla"
      },
      searchCriteria: "none"
    };
  }

  organizeCards = () =>{
    return this.props.cards
  }

  render() {
    return (
      <div className="user-profile">
        Deck Viewer Page
        {/* <DeckViewer cards={this.props.cards}/> */}
        <TCGCardContainer cards={this.organizeCards()} />
      </div>
    );
  }
}
