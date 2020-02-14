import React, { Component } from "react";
import ForumPostHeader from "../components/forum/ForumPostHeader";
import ForumPostForm from "../containers/forum/ForumPostForm";
import Paginator from "../components/Paginator";
import PaginatorV2 from "../components/PaginatorV2";

class ForumHome extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      pageCount: 20,
      pageRange: 4,
      threads: [
        {
          title: "Loading",
          body: "Loading",
          id: 1,
          user: {
            username: "Vilhelm",
            avatar: "#",
            tagLine: "I am a jelly donut"
          }
        },
        {
          title: "Loading",
          body: "Loading",
          id: 2,
          user: {
            username: "Vilhelm",
            avatar: "#",
            tagLine: "I am a jelly donut"
          }
        },
        {
          title: "Loading",
          body: "Loading",
          id: 3,
          user: {
            username: "Vilhelm",
            avatar: "#",
            tagLine: "I am a jelly donut"
          }
        },
        {
          title: "Loading",
          body: "Loading",
          id: 4,
          user: {
            username: "Vilhelm",
            avatar: "#",
            tagLine: "I am a jelly donut"
          }
        },
        {
          title: "Loading",
          body: "Loading",
          id: 5,
          user: {
            username: "Vilhelm",
            avatar: "#",
            tagLine: "I am a jelly donut"
          }
        },
        {
          title: "Loading",
          body: "Loading",
          id: 6,
          user: {
            username: "Vilhelm",
            avatar: "#",
            tagLine: "I am a jelly donut"
          }
        }
      ]
    };
  }

  changePage = page => {
    this.setState({ page: page });
  };

  renderThreads = () =>{
    return this.state.threads.map(thread =>{
      return <ForumPostHeader post={thread} key={thread.id + "-fph"} />
    })
  }

  render() {
    return (
      <section className="page-section">
        <header className="container bg-info my-2">
          <h2 className="row">
            <span className="col text-center">Hot off the Forums</span>
          </h2>
        </header>
        <div className="mx-2 px-5">
          {this.renderThreads()}
        </div>
        <ForumPostForm />
        <PaginatorV2
          changePage={this.changePage}
          pageCount={this.state.pageCount}
          pageRange={this.state.pageRange}
          page={this.state.page}
        />
      </section>
    );
  }
}

export default ForumHome;
