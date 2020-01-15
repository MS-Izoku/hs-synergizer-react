import React from "react";
import { encode, formatType } from "deckstrings";

const SaveDeckButton = props => {
  const generateDeckCode = () => {
    return encode({
      cards: props.cards.map(card => {
        return [card.dbf_id, card.count];
      }),
      format:
        props.format === "wild" ? formatType.FT_WILD : formatType.FT_STANDARD, // wild / standard
      heroes: [props.playerClass.dbf_id] // get player class information
    });
  };

  const saveDeck = () => {
    console.log("Saving Deck");
    // do something with generateDeckCode and posting to the DB
  };

  return <button onClick={saveDeck}>Save Deck</button>;
};

export default SaveDeckButton;
