import React, { Component } from "react";

//#region components
//#endregion

//#region containers
import DeckViewer from "../containers/DeckBuilder/DeckViewer";
import TCGCardContainer from "../containers/TCGCardContainer";
import Paginator from "../components/Paginator";
import DeckCreator from "../components/DeckBuilder/DeckCreator";
import CardViewer from "../components/CardViewer";
import CardDictionary from "../containers/CardDictionary";

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

  render() {
    return (
      <>
        <section className="page-section bg-white" id="deck-builder">
          <div id="deck-builder-main" className="wrapper">
            <div className="wrapper-col large">
              <CardViewer />
              <Paginator className="" />
            </div>
            <div className="small" id="deck-viewer">
              <DeckCreator />
            </div>
          </div>
          <footer>
            <CardDictionary />
          </footer>
        </section>
      </>
    );
  }
}
