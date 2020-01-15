import React from "react";

const TCGCardDeckBuilder = props => {
  removeFromDeck = () => {
    console.log("Removing Card from Deck");
    // do something with props.card
  };

  return (
    <div className="deck-builder-card">
      <p className="card-text">
        <span className="stat-text">{props.card.cost}</span>
        {props.card.name}
        <span className="stat-text">{"Counter"}</span>
      </p>
    </div>
  );
};

export default TCGCardDeckBuilder;
