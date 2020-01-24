import React from "react";

// needs a "card" prop
const TCGCard = props => {
  const defaultImg = "https://i.ya-webdesign.com/images/hearthstone-card-png-1.png";
  return (
    <div className="tcg-card" id={`${props.card.dbfId}-dictionary-card`}>
      <img
        src={props.card.img !== undefined ? props.card.img : defaultImg}
        alt={`${props.card.dbfId}-img`}
      />
    </div>
  );
};

export default TCGCard;
