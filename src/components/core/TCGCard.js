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
    console.log("Do something Cool");
    if (this.props.handleClick !== undefined) this.props.handleClick();
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
