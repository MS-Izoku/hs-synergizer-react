import React, { Component } from "react";

//#region components
//#endregion

//#region containers
import DeckViewer from "../containers/DeckBuilder/DeckViewer";
import TCGCardContainer from "../containers/TCGCardContainer";
import Paginator from "../components/Paginator";

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

  organizeCards = () => {
    return this.props.cards;
  };

  render() {
    return (
      <>
        <section className="page-section">
          <div className="bg-info"></div>
        </section>
      </>
    );
  }
}
