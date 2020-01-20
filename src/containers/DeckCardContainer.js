import React from "react";
import DeckCard from "../components/DeckCard";

const DeckCardContainer = props => {
  console.log(props);
  const renderDecks = () => {
    if (props.decks.length <= 9) {
      return props.decks.map(deck => <DeckCard deck={deck} key={deck.name} />);
    } else return <p>More than 9</p>;
  };

  return (
    <div className="container">
      <header className="col bg-primary">
        <h2 className="col text-center">
          {props.containerName !== null
            ? props.containerName
            : "Deck Card Container"}
        </h2>
      </header>

      <div className="landing-card-grid col"> {renderDecks()}</div>
    </div>
  );
};

export default DeckCardContainer;
