import React, { Component } from "react";
import UpvoteComponent from "./core/UpvoteComponent";
import { MDBIcon } from "mdbreact";

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
      <div className="deck-card-container">
        <div className="deck-card">
          <header>
            <h2>{this.props.deck.name}</h2>
          </header>
          <div className="middle">
            <img src="#" alt="divider" className="divider" />
            <img
              src={
                this.props.deck.set_img !== undefined
                  ? this.props.deck.setImg
                  : "#"
              }
              alt="card-set-icon"
              className="icon"
            />
            <img src="#" alt="divider" className="divider" />
          </div>
          <div className="bottom">
            <span>
              <MDBIcon icon="wine-bottle" />{" "}
              {this.props.deck.dustCost !== undefined
                ? this.props.deck.dustCost
                : "-----"}
            </span>

            <img src="#" alt="deck-curve" />
          </div>
        </div>

        <div className="upvote-container">
          <UpvoteComponent upvotes={1} handleClick={this.handleLike}/>
        </div>
      </div>
    );
  }
}

export default DeckCard;
