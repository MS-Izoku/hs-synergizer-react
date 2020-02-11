import React, { Component } from "react";

// needs a "card" prop
class TCGCard extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      defaultImg: "https://i.ya-webdesign.com/images/hearthstone-card-png-1.png"
    };
  }


  handleClick = () => {
    // pass up the card data if necessary
    if (this.props.handleClick !== undefined) this.props.handleClick(this.props.card);
    else console.log("Card Click! (no handler prop found)")
  };

  render() {
    return (
      <div
        className="tcg-card"
        id={`tcg-${this.props.card.dbfId}-dictionary-card`}
      >
        <img
          src={
            this.props.card.img !== undefined
              ? this.props.card.img
              : this.state.defaultImg
          }
          alt={`${this.props.card.dbfId}-img`}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default TCGCard;

/* Usage Notes:
  requires a handleClick prop
*/
