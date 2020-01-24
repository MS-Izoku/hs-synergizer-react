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
    return (
      <div className="flex-grid bg-info">
        <div className="deck-card">
          <header>
            <h2>DECK NAME</h2>
          </header>
          <div className="flex">
            <img src="#" alt="divider" className="divider" />
            <img src="#" alt="set-image" className="icon" />
            <img src="#" alt="divider" className="divider" />
          </div>
          <div className="flex deck-stats">
            <div className="flex">
              <img src="#" alt="dust-img" className="icon" /> 00000
            </div>
            <div></div>
            <div className="">Curve</div>
          </div>
        </div>

        <p className={(this.state.liked ? "liked" : "") + " upvote-container flex"}>
          <img src="#" alt="upvote-icon" onClick={this.handleLike} />{" "}
          {this.state.like_count !== null ? this.state.like_count : "X"}
        </p>
      </div>
    );
  }
}

export default DeckCard;
