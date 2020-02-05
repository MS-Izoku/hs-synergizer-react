import React, { Component } from "react";
import { range } from "lodash";
import { Link } from "react-router-dom"; // used for pagination

// class PrevNextWrapper extends Component {
//   createTabs = (pageRange = 4) => {
//     let pageMin = 1;
//     let pageMax = pageRange;

//     if (this.props.activeTab !== 1) {
//       console.log("ELLO")
//       if (this.props.activeTab - pageRange <= -1) {
//         console.log("Yellow")
//         pageMax = pageRange * 2 + this.props.activeTab;
//       } else {
//         console.log("ELSE <<<<<<<<<<<")
//         pageMin = this.props.activeTab - pageRange;
//         pageMax = this.props.activeTab + pageRange;
//       }
//     }
//     return range(pageMin, pageMax).map(pageNumber => {
//       return (
//         <div
//           className={`paginator-tab ${
//             pageNumber === this.props.activeTab ? "active" : ""
//           }`}
//         >
//           {pageNumber}
//         </div>
//       );
//     });
//   };

//   render() {
//     return (
//       <div className="paginator">
//         <button className="next">PREV</button>
//         <div>
//           {this.props.fillerComponent()}
//           <div className="tabs">
//             <div className="paginator-tab">{"First"}</div>
//             <div className="paginator-tab">{"Prev"}</div>
//             {this.createTabs()}
//             <div className="paginator-tab">{"Next"}</div>
//             <div className="paginator-tab">{"Last"}</div>
//           </div>
//         </div>
//         <button className="prev">NEXT</button>
//       </div>
//     );
//   }
// }
class PrevNextWrapper extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0
    };
  }
  handlePageClick = pageNumber => {
    if (pageNumber === "first") pageNumber = 1;
    else if (pageNumber === "last") pageNumber = this.props.pageCount;
    else if (pageNumber === "next") {
      if (pageNumber === this.props.pageCount) {
        pageNumber = this.props.pageCount;
      } else {
        pageNumber = this.props.activeTab + 1;
      }
    } else if (pageNumber === "prev") {
      if (pageNumber === 0) {
        pageNumber = 0;
      } else {
        pageNumber = this.props.activeTab - 1;
      }
    }
    this.props.changePageHandler(pageNumber);
    this.setState({ activeTab: pageNumber });
  };

  createTab = pageNumber => (
    <button
      className={"tab " + (this.props.activeTab === pageNumber ? "active" : "")}
      onClick={() => {
        this.handlePageClick(pageNumber);
      }}
    >
      {pageNumber}
    </button>
  );

  calculatePageRange = (pageRange = 7) => {
    let pageMin = this.props.activeTab,
      pageMax = pageRange + this.props.activeTab;
    const pages = pageRange % 2 !== 1 ? pageRange / 2 : pageRange / 2 - 1;
    if(this.props.activeTab + pages > this.props.pageCount){
      // if above the count
    }
    if(this.props.activeTab - pages < 1){
      // below the count
    }

    return range(pageMin, pageMax);
  };

  generateTabs = () => {
    return (
      <>
        {this.createTab("first")}
        {this.createTab("prev")}
        {this.calculatePageRange().map(pageNumber => {
          return this.createTab(pageNumber);
        })}
        {this.createTab("next")}
        {this.createTab("last")}
      </>
    );
  };

  render() {
    return (
      <div className="bg-info paginator">
        {this.props.fillerComponent()}
        <footer className="tabs">{this.generateTabs()}</footer>
      </div>
    );
  }
}

export default PrevNextWrapper;
