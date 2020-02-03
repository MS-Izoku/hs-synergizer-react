import React, { Component } from "react";
import { range } from "lodash";
import TCGCard from "../components/core/TCGCard";
import { convertCardsFromSerializer } from "../serializerConverter";
import { Link, BrowserRouter as Router } from "react-router-dom";

class PaginatorTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      cannotBeClicked: false
    };
  }

  clickHandler = () => {
    let tabText = this.props.tabText;
    if (tabText === "first") tabText = 1;
    else if (tabText === "prev") {
      tabText = this.props.activeTab <= 1 ? 1 : this.props.activeTab - 1;
    } else if (tabText === "last") tabText = this.props.tabCount;
    else if (tabText === "next") {
      tabText =
        this.props.activeTab >= this.props.tabCount
          ? this.props.tabCount
          : this.props.activeTab + 1;
    }
    this.props.setActiveTab(tabText);
  };

  style = () => {
    if (this.state.cannotBeClicked === true) return "inactive";
    else if (this.props.activeTab === this.props.tabText) return "active";
    else return "";
  };

  render() {
    return (
      <Link>
        <div className={"tab " + this.style()} onClick={this.clickHandler}>
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
      activeTab: 1,
      min: 0,
      max: 0
    };
  }

  pageRange = () => {
    let pageRange = 3;
    let min = this.props.activeTab - pageRange;
    let max = this.props.activeTab + pageRange;

    if (min <= 0) {
      min = 1;
      max = pageRange * 2;
    }
    if (max > this.props.tabCount) {
      min = this.props.tabCount - pageRange * 2;
      max = this.props.tabCount;
    }
    return range(min, max);
  };

  renderTabs = () =>
    this.pageRange().map(tab => (
      <PaginatorTab
        key={tab}
        tabText={tab}
        clickHandler={this.props.handlePageChange}
        setActiveTab={this.props.setActiveTab}
        activeTab={this.props.activeTab}
        setActiveTab={this.props.setActiveTab}
      />
    ));

  render() {
    return (
      <div className="tab-wrapper">
        <div className="tabs navs">
          <PaginatorTab
            key={"first"}
            tabText={"first"}
            clickHandler={this.props.handlePageChange}
            setActiveTab={this.props.setActiveTab}
            activeTab={this.props.activeTab}
            setActiveTab={this.props.setActiveTab}
            tabCount={this.props.tabCount}
          />
          <PaginatorTab
            key={"prev"}
            tabText={"prev"}
            clickHandler={this.props.handlePageChange}
            setActiveTab={this.props.setActiveTab}
            activeTab={this.props.activeTab}
            setActiveTab={this.props.setActiveTab}
            tabCount={this.props.tabCount}
          />
        </div>

        <div className="tabs numerical">{this.renderTabs()}</div>

        <div className="tabs navs">
          <PaginatorTab
            key={"next"}
            tabText={"next"}
            clickHandler={this.props.handlePageChange}
            setActiveTab={this.props.setActiveTab}
            activeTab={this.props.activeTab}
            setActiveTab={this.props.setActiveTab}
            tabCount={this.props.tabCount}
            //setActiveTab={this.props.setActiveTab}
          />
          <PaginatorTab
            key={"last"}
            tabText={"last"}
            clickHandler={this.props.handlePageChange}
            setActiveTab={this.props.setActiveTab}
            activeTab={this.props.activeTab}
            setActiveTab={this.props.setActiveTab}
            tabCount={this.props.tabCount}
            //setActiveTab={this.props.setActiveTab}
          />
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
      activeTab: 1
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/cards/index/1")
      .then(resp => resp.json())
      .then(json => {
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
        const cards = convertCardsFromSerializer(json.cards);
        this.setState({
          cards: cards,
          activeTab: json.page
        });
      });
  };

  setActiveTab = tabNumber => {
    this.setState({ activeTab: tabNumber });
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
            activeTab={this.state.activeTab}
            setActiveTab={this.setActiveTab}
            count={this.props.range === undefined ? 5 : this.props.range}
          />
        </div>
      </Router>
    );
  }
}
