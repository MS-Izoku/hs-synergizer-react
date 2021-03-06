import React, { Component } from "react";
import TCGCard from "../components/core/TCGCard";
import { convertCardsFromSerializer } from "../serializerConverter";
import { range } from "lodash";

// import Paginator from "../components/Paginator";
import cardData from "../services/CardDataHandler";

export default class CardDictionary extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      formState: {
        manaCost: {
          min: 0,
          max: 0
        },
        sorting: {
          active: "None",
          options: ["None", "Cost", "Attack", "Health", "Mechanic"],
          min: 0,
          max: 0
        },
        filters: {
          active: ["None"],
          options: ["None", "Cost", "Attack", "Health", "Mechanic"],
          min: 0, // use this when there is a single value
          max: 0
        },
        manaFilter: {
          active: false
        }
      }
    };
  }

  //#region lifecycle
  componentDidMount() {
    const data = cardData.getData();
    this.setState({cards: data.cards})
  }
  //#endregion

  //#region Event Handlers
  onFilterChange = (event, filterOption) => {
    this.setState({
      filters: {
        ...this.state.filters,
        active: filterOption
      }
    });
  };

  handleFilter = () => {};

  handleSort = (event, sortingMethod) => {
    event.preventDefault();
    this.setState({
      sorting: { ...this.state.sorting, active: sortingMethod }
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };
  //#endregion

  //#region Filter JSX
  // Right Area
  mainFilters = () => (
    <>
      <div className="main-filter">
        <label htmlFor="name">Name</label>
        <input name="name" onChange={this.handleFormChange} />
      </div>
      <div>
        <label htmlFor="filters">Filter By: </label>
        <select
          name="filters"
          onChange={event => {
            console.log(event.target.value);
            this.setState({
              formState: {
                ...this.state.formState,
                filters: {
                  ...this.state.formState.filters,
                  active: event.target.value
                }
              }
            });
          }}
        >
          {this.state.formState.filters.options.map(filterOption => (
            <option
              value={filterOption}
              key={filterOption.toLowerCase() + "-filter"}
            >
              {filterOption}
            </option>
          ))}
        </select>
      </div>
    </>
  );

  // Left Area
  sortingArea = () => {
    return (
      <div>
        <label htmlFor="sorting">Sort By: </label>
        <select name="sorting">
          {this.state.formState.sorting.options.map(sortingOption => (
            <option
              key={sortingOption.toLowerCase() + "-sorting"}
              value={sortingOption.toLowerCase()}
            >
              {sortingOption}
            </option>
          ))}
        </select>
        <select>
          <option value="asc">Ascending</option>
          <option value="dsc">Descending</option>
        </select>
      </div>
    );
  };

  // Middle Area
  specialFilters = () => {
    return (
      <div>
        {this.manaFilter()}
        <h2>{this.state.formState.filters.active}</h2>
      </div>
    );
  };
  //#endregion

  renderCards = () => {
    const cardRenderer = () => {
      if(Array.isArray(this.props.cards)){
        return this.props.cards.map(card => {
          return <TCGCard card={card} key={card.dbfId + card.name} />;
        });
      }
      else {
        console.log(this.props.cards)
      }
    };
    return <section className="tcg-card-container bg-info">{cardRenderer()}</section>;
  };

  defaultRender = () => {
    return <div>Nothing to See Here</div>;
  };

  manaFilter = () => {
    const manaTab = manaCost => {
      return (
        <div
          key={manaCost + "-mana-filter"}
          className="mana-tab"
          onClick={() => {
            this.setState({
              formState: {
                ...this.state.formState,
                manaCost: {
                  ...this.state.formState.manaCost,
                  min: manaCost
                }
              }
            });
          }}
        >
          <p>{manaCost}</p>
        </div>
      );
    };
    return (
      <div className="mana-tab-container">
        {range(0, 8).map(manaCount => {
          return manaCount === 7 ? manaTab("7+") : manaTab(manaCount);
        })}
      </div>
    );
  };
  //#endregion
  changePage = pageIndex => {
    console.log("Page Change: " + pageIndex);
    fetch(`http://localhost:3000/cards/index/${pageIndex}`)
      .then(resp => resp.json())
      .then(json => {
        console.log("FETCHING");
        const cards = convertCardsFromSerializer(json.cards);
        this.setState({
          cards: cards
        });
      });
  };

  render() {
    return (
      <>
        <div className="bg-info">
          <form id="card-search-filter-nav" onSubmit={this.handleSubmit}>
            <section id="card-search-base-filters">
              {this.mainFilters()}
            </section>
            <section id="secondary-filters">{this.specialFilters()}</section>
            <section id="sorting">{this.sortingArea()}</section>
          </form>
        </div>
      </>
    );
  }
}
