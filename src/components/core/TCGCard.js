import React from "react";

// needs a "card" prop
const TCGCard = props => {
  const hoverPic = () => <img src={props.card.img} className="mouse-follow"/>;
  const defaultImg = () =>
    "https://i.ya-webdesign.com/images/hearthstone-card-png-1.png";
  return (
    <div className="tcg-card" id={`tcg-${props.card.dbfId}-dictionary-card`}>
      <img
        src={props.card.img !== undefined ? props.card.img : defaultImg()}
        alt={`${props.card.dbfId}-img`}
        onMouseEnter={event => {
          console.log("ALLO", event.target);
          hoverPic();
        }}
        onMouseLeave
      />
    </div>
  );
};

export default TCGCard;
