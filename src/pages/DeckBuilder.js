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
      deckCards: []
    };
  }

  removeCard = cardData => {
    this.setState({
      deckCards: this.state.deckCards.filter(card => {
        return card !== cardData;
      })
    });
  };

  addCard = cardData => {
    const sortedCards = [...this.state.deckCards, cardData];
    
    this.setState({ deckCards: sortedCards });
  };

  render() {
    console.log(this.state)
    return (
      <>
        <section className="page-section bg-white" id="deck-builder">
          <div id="deck-builder-main" className="wrapper">
            <div className="wrapper-col large">
              <CardViewer handleCardClick={this.addCard}/>
              <Paginator className="" />
            </div>
            <div className="small" id="deck-viewer">
              <DeckCreator handleCardClick={this.removeCard} cardsInDeck={this.state.deckCards}/>
            </div>
          </div>
          <footer>
            <CardDictionary/>
          </footer>
        </section>
      </>
    );
  }
}
