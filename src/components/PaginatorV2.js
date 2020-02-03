import React, { Component } from "react";
import { range } from "lodash";
import TCGCard from "../components/core/TCGCard";
import { convertCardsFromSerializer } from "../serializerConverter";
import { Link, BrowserRouter as Router } from "react-router-dom";

class PaginatorTab extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      cannotBeClicked: false
    };
  }

  style = () => {
    if (this.state.cannotBeClicked === true) return "inactive";
    else if (this.state.isActive === true) return "active";
    else return "";
  };

  render() {
    return (
      <Link>
        <div className={"tab" + this.style()} onClick={this.props.clickHandler}>
          {this.props.tabText}
        </div>
      </Link>
    );
  }
}

class PaginatorBar extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
      min: 0,
      max: 0
    };
  }

  componentDidMount() {
    this.setState({
      min: 0,
      max: 0,
      activeTab: 0
    });
  }

  handleNext = () => {};

  handlePrev = () => {};

  handleFirst = () => {};

  handleLast = () => {};

  render() {
    return (
      <div className="tab-wrapper">
        <div className="tabs">
          <PaginatorTab tabText={"First"} clickHandler={this.handleFirst} />
          <PaginatorTab tabText={"Prev"} clickHandler={this.handlePrev} />
        </div>

        <div className="tabs numerical">
          {range(1, this.props.tabCount).map(tab => (
            <PaginatorTab
              tabText={tab}
              clickHandler={this.props.handlePageChange}
            />
          ))}
        </div>

        <div className="tabs">
          <PaginatorTab tabText={"Next"} clickHandler={this.handleNext} />
          <PaginatorTab tabText={"Last"} clickHandler={this.handleLast} />
        </div>
      </div>
    );
  }
}

export default class PaginatorV2 extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      pageCount: 0,
      activeTab: 0
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/cards/index/1")
      .then(resp => resp.json())
      .then(json => {
        console.log("Fetching", json);
        const cards = convertCardsFromSerializer(json.cards);
        this.setState({
          cards: cards,
          pageCount: json.page_count,
          activeTab: json.page
        });
      });
  }

  handlePageChange = pageNumber => {
    fetch(`http://localhost:3000/cards/index/${pageNumber}`)
      .then(resp => resp.json())
      .then(json => {
        console.log("Fetching", json);
        const cards = convertCardsFromSerializer(json.cards);
        this.setState({
          cards: cards,
          activeTab: json.page
        });
      });
  };

  render() {
    return (
      <Router>
        <div className="paginator">
          {this.props.fillerComponent === undefined ? (
            <div>Filler</div>
          ) : (
            this.props.fillerComponent()
          )}
          <PaginatorBar
            tabCount={this.state.pageCount}
            count={this.props.range === undefined ? 5 : this.props.range}
          />
        </div>
      </Router>
    );
  }
}
