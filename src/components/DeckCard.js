import React from "react";

const DeckCard = props => {
  const handleHover = () => {
    console.log("Hovering");
  };

  return (
    <div className="deck-card bg-primary grid-element" onHover={handleHover()}>
      <div className="container text-center px-2 py-2">
        <h2 className="col text-center">
          {props.deck.name !== null ? props.deck.name : "Deck Name"}
        </h2>

        <div className="row px-3">
          <img className="col" src="#" alt="page-divider"/>
          <img
            className="col bg-danger set-icon"
            src={props.deck.setIcon !== null ? props.deck.setIcon : "#"}
            alt="set-icon"
          />
          <img className="col" src="#" alt="page-divider"/>
        </div>

        <div className="row">
          <span className="col">
            <img src="#" alt="dust-icon" />{" "}
            {props.deck.dustCost !== null ? props.deck.dustCost : 0}
          </span>
          <div className="col" />
          <div className="col">Curve</div>
        </div>
      </div>

      <div className="upvotes container text-center bg-warning">
        <p>
          <img src="#" alt="upvote-icon" />{" "}
          {props.deck.upvotes !== null ? props.deck.upvotes : "X"}
        </p>
      </div>
    </div>
  );
};

export default DeckCard;
