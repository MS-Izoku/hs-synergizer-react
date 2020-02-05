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
      <header className="section-header-wrapper">
        <h2 className="section-header">
          {props.containerName !== null
            ? props.containerName
            : "Deck Card Container"}
        </h2>
      </header>

      <div className="landing-card-grid pt-2"> {renderDecks()}</div>
    </>
  );
};

export default DeckCardContainer;
