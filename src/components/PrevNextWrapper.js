import React, { Component } from "react";
import { range } from "lodash";

import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow
} from "mdbreact";

const PrevNextWrapper = props => {
  const activeTab = tabNumber => (
    <div key={tabNumber} className="paginator-tab">
      {tabNumber}
    </div>
  );

  const inactiveTab = tabNumber => (
    <div key={tabNumber} className="paginator-tab active">
      {tabNumber}
    </div>
  );

  const createTabs = () => {
    // if (props.pageCount !== undefined) {
    //   console.log("CREATION");
    //   return range(props.pageCount).map(pageNumber => {
    //     return pageNumber === props.activeTab ? activeTab() : inactiveTab();
    //   });
    // } else return activeTab(0);
    return props.pageCount !== undefined && props.pageCount > 0
      ? range(props.pageCount).map(pageNumber => {
          return pageNumber === props.activeTab ? activeTab() : inactiveTab();
        })
      : activeTab(0);
  };

  return (
    <div className="paginator">
      <button className="next">PREV</button>
      {props.fillerComponent()}
      <div className="bg-info">{createTabs()}</div>
      <button className="prev">NEXT</button>
    </div>
  );
};

export default PrevNextWrapper;
