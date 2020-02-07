import React, { Component } from "react";

//#region components
//#endregion

//#region containers
import DeckViewer from "../containers/DeckBuilder/DeckViewer";
import TCGCardContainer from "../containers/TCGCardContainer";
import Paginator from "../components/Paginator";
import DeckCreator from "../components/DeckBuilder/DeckCreator";

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
        <section className="page-section" id="deck-builder">
          <header>
            <h2>Deck Builder</h2>
          </header>
          <div className="wrapper bg-info">
            <Paginator />
            <div className="bg-warning" id="deck-viewer">
              <DeckCreator />
            </div>
          </div>
        </section>
      </>
    );
  }
}
