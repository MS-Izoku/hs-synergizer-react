import React, { Component } from "react";
import { range } from "lodash";
import { Link, BrowserRouter as Router } from "react-router-dom";
import {withRouter } from 'react-router'

class PaginatorTab extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      cannotBeClicked: false
    };
  }

  generateTabTextValue = () => {
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
    return tabText;
  };

  clickHandler = () => {
    this.props.setActiveTab(this.generateTabTextValue());
  };

  style = () => {
    if (this.state.cannotBeClicked === true) return "inactive";
    else if (this.props.activeTab === this.props.tabText) return "active";
    else return "";
  };

  render() {
    console.log(this.props)
    return (
      <Link to={this.props.path + "/page/" + this.generateTabTextValue()}>
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
    let pageRange = this.props.range;
    let min = this.props.activeTab - pageRange;
    let max = this.props.activeTab + pageRange;

    if (min <= 1) {
      min = 1;
      max = pageRange * 2 + 1;
    }
    if (max > this.props.tabCount) {
      min = this.props.tabCount - pageRange * 2;
      max = this.props.tabCount;
    }
    return range(min, max + 1);
  };

  renderTabs = () =>
    this.pageRange().map(tab => (
      <PaginatorTab
        key={tab}
        tabText={tab}
        clickHandler={this.props.handlePageChange}
        setActiveTab={this.props.setActiveTab}
        activeTab={this.props.activeTab}
        path={this.props.path}
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
            tabCount={this.props.tabCount}
          />
          <PaginatorTab
            key={"prev"}
            tabText={"prev"}
            clickHandler={this.props.handlePageChange}
            setActiveTab={this.props.setActiveTab}
            activeTab={this.props.activeTab}
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
            tabCount={this.props.tabCount}
          />
          <PaginatorTab
            key={"last"}
            tabText={"last"}
            clickHandler={this.props.handlePageChange}
            setActiveTab={this.props.setActiveTab}
            activeTab={this.props.activeTab}
            tabCount={this.props.tabCount}
          />
        </div>
      </div>
    );
  }
}

class Paginator extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      pageCount: 0,
      activeTab: 1
    };
  }

  setActiveTab = tabNumber => {
    if (this.props.handlePageChange !== undefined)
      this.props.handlePageChange(tabNumber);
    this.setState({ activeTab: tabNumber });
  };

  componentDidMount(){
    if(this.props.auto){
      this.autoFlow()
    }
  }

  autoFlow = (forwardPageMove) =>{
    if(forwardPageMove){
      
    }
    else{

    }
  }

  render() {
    console.log(this.props , "ALLO")
    return (
      <Router>
        <div className={"paginator " + this.props.className} style={this.props.style}>
          <PaginatorBar
            path={this.props.match.path}
            tabCount={
              this.props.pageCount !== undefined ? this.props.pageCount : 20
            }
            activeTab={this.state.activeTab}
            setActiveTab={this.setActiveTab}
            range={this.props.range === undefined ? 2 : this.props.range}
          />
        </div>
      </Router>
    );
  }
}

export default withRouter(Paginator)

/*
Usage Notes:
1) The main component <Paginator /> accepts these props:
  -handlePageChange(pageNumber) => callback function that allows components to hook into it
  -pageCount => the total number of pages that can be displayed (defaulted to 20)
*/
