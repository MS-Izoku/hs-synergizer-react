import React, { Component } from "react";
import cardData from "../services/CardDataHandler";
import TCGCard from "./core/TCGCard";

export default class CardViewer extends Component {
  constructor() {
    super();
    this.state = {
      allCards: [],
      renderedCards: [],
      per_page: 8
    };
  }

  getSlice = pageNumber => {
    if (pageNumber <= 0) pageNumber = 1;
    if (pageNumber > cardData.pageCount) pageNumber = cardData.pageCount;
    console.log(this.state.allCards.slice(0, 8))
    return this.state.allCards.slice(0, 8);
  };

  componentDidMount() {
    console.log("CardData in Viewer", cardData.getData().cards);
    const cards = cardData.getData().cards;
    this.setState({ allCards: cards, renderedCards: cards.slice(0, 8) });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  renderCards = () => {
    return this.state.renderedCards.map(card => (
      <TCGCard card={card} key={card.dbf_id} />
    ));
  };

  render() {
    return (
      <div id="card-viewer">{this.renderCards()}</div>
    );
  }
}
