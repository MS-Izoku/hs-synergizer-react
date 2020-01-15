import React, { Component } from "react";
import TCGCard from "../components/TCGCard";

export default class TCGCardContainer extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }

  renderCards = () => {
    this.state.cards.map(card => {
      return <TCGCard card={card} />;
    });
  };

  defaultRender = () => {
    <div>Waiting For Card Data</div>;
  };

  render() {
    return (
      <div className="card-grid">
        {this.state.cards.length > 1 ? this.renderCards() : this.defaultRender}
      </div>
    );
  }
}
