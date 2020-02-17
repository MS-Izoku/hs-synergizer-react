import React, { Component } from "react";
import ForumPostHeader from "../components/forum/ForumPostHeader";
import ForumPostForm from "../containers/forum/ForumPostForm";
import Paginator from "../components/Paginator";
import PaginatorV2 from "../components/PaginatorV2";

import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import { MDBIcon } from "mdbreact";

class ForumHome extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      pageCount: 20,
      pageRange: 4,
      perPage: 10,
      allThreads: [],
      threads: [
        {
          title: "-Loading-Page-Content-",
          body: "Loading",
          id: 1,
          user: {
            username: "Vilhelm",
            avatar: "#",
            tagLine: "I am a jelly donut"
          }
        }
      ],
      searchValue: ""
    };
  }

  changePage = page => {
    this.setState({ page: page });
    this.getSliceOfAll(page);
  };

  componentDidMount() {
    //#region create Placeholders
    const tempPost = id => {
      return {
        title: "-Loading-Page-Content-" + id,
        body: "Loading",
        id: id,
        user: {
          username: "Vilhelm",
          avatar: "#",
          tagLine: "I am a jelly donut"
        }
      };
    };

    let resultArray = [];
    for (let i = 0; i < 100; i++) {
      resultArray.push(tempPost(i));
    }
    const firstPageMax =
      parseInt(this.props.match.params.page_id) * this.state.perPage;
    const firstPageMin = firstPageMax - this.state.perPage;
    const currentThreads = resultArray.slice(firstPageMin, firstPageMax);
    this.setState({
      allThreads: resultArray,
      threads: currentThreads,
      pageCount: resultArray.length / this.state.perPage
    });
    //#endregion
  }

  getSliceOfAll = page => {
    const resultIndex = page * this.state.perPage;
    this.setState({
      threads: this.state.allThreads.slice(
        resultIndex - this.state.perPage,
        resultIndex
      )
    });
  };

  renderThreads = () => {
    return this.state.threads.map(thread => {
      return <ForumPostHeader post={thread} key={thread.id + "-fph"} />;
    });
  };

  render() {
    return (
      <section className="page-section">
        <header className="container bg-info my-2">
          <h2 className="row">
            <span className="col text-center">Hot off the Forums</span>
          </h2>
        </header>

        <div className="mx-2 px-5">{this.renderThreads()}</div>
        <div id="forum-nav">
          <div className="wrapper">
            <SearchBar />
            <p className="hoverable">New Post</p>
          </div>
          <div className="wrapper">
            <PaginatorV2
              changePage={this.changePage}
              pageCount={this.state.pageCount}
              pageRange={this.state.pageRange}
              page={this.state.page}
            />
          </div>
        </div>

        <ForumPostForm />
      </section>
    );
  }
}

class SearchBar extends Component {
  state = {
    searchValue: ""
  };

  render() {
    return (
      <form className="search-form">
        <input
          className="search-bar rounded"
          placeholder="Search the Forums"
          name="search"
          value={this.state.searchValue}
        />
        <button type="submit">
          <MDBIcon icon="search" />
        </button>
      </form>
    );
  }
}

export default withRouter(ForumHome);
