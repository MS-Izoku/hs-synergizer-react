import React, { Component } from "react";

export default class CardDictionary extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      filters: {
        active: ["none"],
        options: ["none", "name", "cost-threshold", "attack-threshold", "health-threshold", "mechanic"]
      },
      sorting: {
        active: "none",
        options: ["none", "name", "cost", "attack", "health"]
      }
    };
  }

  //#region sorting methods
  byName = (inputA , inputB , options=null) => {
    return inputA > inputB ? -1 : 1;
  };

  byStat = (inputA , inputB , stat="health") =>{
      return inputA[stat] > inputB[stat] ? -1 : 1;
  }

  //#region

  //#region filtering methods
  filterCards = (filterCondition , options) => {
    return this.state.cards.filter((cardA , cardB) => filterCondition(cardA , cardB , options));
  };

  //#endregion

  // sort-filter JSX
  searchFilter = () => {
    return <div id="search-filter-nav">Filter nav</div>;
  };


  renderCards = () => {};

  render() {
    return (
      <div>
        <header>
          <h2>Card Dictionary</h2>
        </header>
      </div>
    );
  }
}
