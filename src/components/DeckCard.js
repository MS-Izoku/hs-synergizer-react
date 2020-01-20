import React, { Component } from "react";

class DeckCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      like_count: 0
    };
  }
  handleHover = () => {
    console.log("Hovering (PlaceHolder)");
  };

  handleLike = () => {
    console.log("Liking Post (PlaceHolder)");
    const newCount = this.state.liked
      ? --this.state.like_count
      : ++this.state.like_count;
    this.setState({
      liked: !this.state.liked,
      like_count: newCount
    });
  };

  render() {
    console.log(this.props);
    return (
      <div
        className="deck-card grid-element mx-2 my-2"
        onHover={this.handleHover}
      >
        <div className="container text-center px-2 py-2">
          <h2 className="col text-center">
            {this.props.deck.name !== null ? this.props.deck.name : "Deck Name"}
          </h2>

          <div className="row px-3">
            <img className="col" src="#" alt="page-divider" />
            <img
              className="col set-icon"
              src={
                this.props.deck.setIcon !== null ? this.props.deck.setIcon : "#"
              }
              alt="set-icon"
            />
            <img className="col" src="#" alt="page-divider" />
          </div>

          <div className="row">
            <span className="col">
              <img src="#" alt="dust-icon" />{" "}
              {this.props.deck.dustCost !== null ? this.props.deck.dustCost : 0}
            </span>
            <div className="col" />
            <div className="col">Curve</div>
          </div>
        </div>

        <div className="upvote-container text-center my-0">
          <p className={this.state.liked ? "liked" : ""}>
            <img
              src="#"
              alt="upvote-icon"
              onClick={this.handleLike}
              className="debug-selector"
            />{" "}
            {this.state.like_count !== null ? this.state.like_count : "X"}
          </p>
        </div>
      </div>
    );
  }
}

export default DeckCard;
