import React, { Component } from "react";
import { range } from "lodash";

class PaginatorV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page
    };
  }

  createTabs = () => {
    const pageRange = this.props.pageRange ? this.props.pageRange : 5;
    let min = this.props.page - this.props.pageRange;
    let max = this.props.page + this.props.pageRange;
    if (max >= this.props.pageCount) {
      min = this.props.pageCount - pageRange * 2;
      max = this.props.pageCount;
    }
    if (min < 1) {
      min = 1;
      max = this.props.pageRange * 2 + 1;
    }

    return range(min, max + 1).map(pageNumber => {
      return (
        <PaginatorTab
          key={pageNumber + "-pt"}
          style={this.props.tabStyle}
          pageNumber={pageNumber}
          active={pageNumber === this.state.page}
          changeActiveTab={() => {
            this.changeActiveTab(pageNumber);
          }}
        />
      );
    });
  };

  changeActiveTab = targetPage => {
    if (targetPage === "First") targetPage = 1;
    else if (targetPage === "Prev") {
      targetPage = this.state.page - 1 > 1 ? this.state.page - 1 : 1;
    } else if (targetPage === "Next") {
      targetPage =
        this.state.page + 1 > this.state.pageCount
          ? this.state.pageCount
          : this.state.page + 1;
    } else if (targetPage === "Last") targetPage = this.props.pageCount;
    this.setState({ page: targetPage });
    this.props.changePage(targetPage);
  };

  render() {
    return (
      <div style={this.props.wrapperStyle}>
        <PaginatorTab
          style={this.props.tabStyle}
          pageNumber={"First"}
          changeActiveTab={this.changeActiveTab}
          className={this.props.tabClassName}
        />
        <PaginatorTab
          style={this.props.tabStyle}
          className={this.props.tabClassName}
          pageNumber={"Prev"}
          changeActiveTab={this.changeActiveTab}
        />
        {this.createTabs()}
        <PaginatorTab
          style={this.props.tabStyle}
          pageNumber={"Next"}
          changeActiveTab={this.changeActiveTab}
          className={this.props.tabClassName}
        />
        <PaginatorTab
          style={this.props.tabStyle}
          pageNumber={"Last"}
          changeActiveTab={this.changeActiveTab}
          className={this.props.tabClassName}
        />
      </div>
    );
  }
}

const PaginatorTab = props => {
  return (
    <button
      style={props.style}
      className={(props.active ? " active" : "") + props.className}
      onClick={() => {
        props.changeActiveTab(props.pageNumber);
      }}
    >
      {props.pageNumber}
    </button>
  );
};

export default PaginatorV2;
