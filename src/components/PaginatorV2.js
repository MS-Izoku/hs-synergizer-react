import React, { Component } from "react";
import { range } from "lodash";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

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
          getActivePage={this.getActivePage}
          path={this.props.match.path}
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

  getActivePage = targetPage => {
    if (targetPage === "First") targetPage = 1;
    else if (targetPage === "Prev") {
      targetPage = this.state.page - 1 > 1 ? this.state.page - 1 : 1;
    } else if (targetPage === "Next") {
      targetPage =
        this.state.page + 1 > this.props.pageCount
          ? this.props.pageCount
          : this.state.page + 1;
    } else if (targetPage === "Last") targetPage = this.props.pageCount;
    return targetPage;
  };

  changeActiveTab = targetPage => {
    targetPage = this.getActivePage(targetPage);
    this.setState({ page: targetPage });
    this.props.changePage(targetPage);
  };

  render() {
    return (
      <div style={this.props.wrapperStyle}>
        <PaginatorTab
          getActivePage={this.getActivePage}
          style={this.props.tabStyle}
          pageNumber={"First"}
          changeActiveTab={this.changeActiveTab}
          className={this.props.tabClassName}
          path={this.props.match.path}
        />
        <PaginatorTab
          getActivePage={this.getActivePage}
          style={this.props.tabStyle}
          pageNumber={"Prev"}
          changeActiveTab={this.changeActiveTab}
          className={this.props.tabClassName}
          path={this.props.match.path}
        />
        {this.createTabs()}
        <PaginatorTab
          getActivePage={this.getActivePage}
          style={this.props.tabStyle}
          pageNumber={"Next"}
          changeActiveTab={this.changeActiveTab}
          className={this.props.tabClassName}
          path={this.props.match.path}
        />
        <PaginatorTab
          getActivePage={this.getActivePage}
          style={this.props.tabStyle}
          pageNumber={"Last"}
          changeActiveTab={this.changeActiveTab}
          className={this.props.tabClassName}
          path={this.props.match.path}
        />
      </div>
    );
  }
}

const PaginatorTab = props => {
  const getPageNumber = `${props.getActivePage(props.pageNumber)}`
  console.log("Target Page Number: " + getPageNumber , props.pageNumber)
  return (
    <Link to={getPageNumber}>
      <button
        style={props.style}
        className={
          (props.active === true ? "active bg-info " : "") + props.className
        }
        onClick={() => {
          props.changeActiveTab(props.pageNumber);
        }}
      >
        {props.pageNumber}
      </button>
    </Link>
  );
};

export default withRouter(PaginatorV2);
