import React, { Component } from "react";

class DeckCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likeCount: 0
    };
  }
  handleHover = () => {
    console.log("Hovering (PlaceHolder)");
  };



  handleLike = () => {
    console.log("Liking Post (PlaceHolder)");
    const newCount = this.state.liked
      ? this.state.like_count - 1
      : this.state.like_count + 1;
    this.setState({
      liked: !this.state.liked,
      like_count: newCount
    });
  };

  render() {
    return (
      <div className="">
        <div className="deck-card px-2 py-2">
          <header>
            <h2>
              {this.props.deck.name !== undefined ? this.props.deck.name : "--Deck Name--"}
            </h2>
          </header>
          <div className="flex padding-10">
            <img src="#" alt="divider" className="divider" />
            <img
              src={this.props.deck.set_img !== undefined ? this.props.deck.setImg : "#"}
              alt="set-image"
              className="icon"
            />
            <img src="#" alt="divider" className="divider" />
          </div>
          <div className="flex deck-stats">
            <div className="flex">
              <img src="#" alt="dust-img" className="icon" />{" "}
              {this.props.deck.dustCost !== undefined ? this.props.deck.dustCost : "-----"}
            </div>
            <hr />
            <img src="#" alt="deck-curve" />
          </div>
        </div>

        <p
          className={
            (this.state.liked ? "liked" : "") + " upvote-container flex"
          }
        >
          <img src="#" alt="upvote" onClick={this.handleLike} />{" " + this.state.likeCount}
          
        </p>
      </div>
    );
  }
}

export default DeckCard;
