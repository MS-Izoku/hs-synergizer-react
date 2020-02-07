import React, { Component } from "react";

const DeckBuilderCard = props => {
  return (
    <div className="deck-builder-card" onClick={props.removeCard}>
      <h2>{props.card.name ? props.card.name : "Card Name"}</h2>
    </div>
  );
};

export default class DeckCreator extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      formState: {
        deckName: "Untitled Deck",
        nameActive: false
      }
    };
  }

  addCard = card => {
    this.setState({ cards: [...this.state.cards, card] });
  };

  removeCard = card => {
    this.setState({
      cards: this.state.cards.filter(cardInDeck => cardInDeck !== card)
    });
  };

  saveDeck = () => {};

  handleFormChange = event => {
    console.log(event.target.name, this.state);
    event.preventDefault();
    this.setState({
      formState: {
        ...this.state.formState,
        [event.target.name]: event.target.value
      }
    });
  };

  renderCards = () => {
    this.state.cards.map(card => {
      return <DeckBuilderCard card={card} removeCard={this.removeCard} />;
    });
  };

  toggleNameInput = () => {
    this.setState({
      formState: {
        ...this.state.formState,
        nameActive: !this.state.formState.nameActive
      }
    });
  };

  handleNameChange = event => {
    event.preventDefault();
    this.setState({
      formState: {
        ...this.state.formState,
        nameActive: false
      }
    });
  };

  render() {
    console.log(this.state.formState);
    return (
      <div id="deck-creator" className="wrapper-col">
        {this.state.formState.nameActive ? (
          <form onSubmit={this.handleNameChange}>
            <input
              type="text"
              name="deckName"
              onChange={this.handleFormChange}
              value={this.state.formState.deckName}
            />
          </form>
        ) : (
          <h2 onClick={this.toggleNameInput}>
            {this.state.formState.deckName}
          </h2>
        )}
        <button onClick={this.saveDeck}>BUTTON</button>
      </div>
    );
  }
}
