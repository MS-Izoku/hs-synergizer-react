import React, { Component } from "react";
import TCGCard from "../components/core/TCGCard";
import {convertCardsFromSerializer} from '../serializerConverter'

export default class CardDictionary extends Component {
  constructor() {
    super();
    this.state = {
      fetchedIndexes: [],
      cards: [],
      filters: {
        active: ["none"],
        options: [
          "none",
          "name",
          "cost-threshold",
          "attack-threshold",
          "health-threshold",
          "mechanic"
        ]
      },
      sorting: {
        active: "none",
        options: ["none", "name", "cost", "attack", "health"]
      }
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/cards/index/1")
      .then(resp => resp.json())
      .then(json => {
        const cards = convertCardsFromSerializer(json)
        this.setState({cards : cards})
      })
  }

  //#region sorting methods
  byName = (inputA, inputB, options = null) => {
    return inputA > inputB ? -1 : 1;
  };

  byStat = (inputA, inputB, stat = "health") => {
    return inputA[stat] > inputB[stat] ? -1 : 1;
  };

  //#region

  //#region filtering methods
  filterCards = (filterCondition, options) => {
    return this.state.cards.filter((cardA, cardB) =>
      filterCondition(cardA, cardB, options)
    );
  };

  //#endregion

  // sort-filter JSX
  searchFilter = () => {
    return <div id="search-filter-nav">Filter nav</div>;
  };

  renderCards = () => {
    const cardRenderer = () =>{
      return this.state.cards.map(card => {
        return <TCGCard card={card} key={card.id + card.name} />;
      });
    }
    return <section className="tcg-card-container">
      {cardRenderer()}
    </section>
  };

  defaultRender = () => {
    return <div>Nothing to See Here</div>;
  };

  render() {
    return (
      <div className="bg-warning">
        <header>
          <h2>Card Dictionary</h2>
        </header>
        {this.state.cards.length > 0
          ? this.renderCards()
          : this.defaultRender()}
      </div>
    );
  }
}
