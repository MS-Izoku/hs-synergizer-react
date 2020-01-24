import React from "react";
import DeckCard from "../components/DeckCard";

const DeckCardContainer = props => {
  const renderDecks = () => {
    if (props.decks.length <= 6) {
      return props.decks.map(deck => <DeckCard deck={deck} key={deck.name} />);
    } else return <p>More than 9</p>;
  };

  return (
    <>
      <header className="bg-primary">
        <h2 className="text-center">
          {props.containerName !== null
            ? props.containerName
            : "Deck Card Container"}
        </h2>
      </header>

      <div className="landing-card-grid"> {renderDecks()}</div>
    </>
  );
};

export default DeckCardContainer;
