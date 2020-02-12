import React, { Component } from "react";
import ForumPostHeader from "../components/forum/ForumPostHeader";
import ForumPostHomeCard from "../components/forum/ForumPostHomeCard";

import ForumThread from "../containers/forum/ForumThread";
import ForumPostForm from "../containers/forum/ForumPostForm";

class ForumHome extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      threads: [
        {
          title: "Loading",
          body: "Loading",
          user: {
            username: "Vilhelm",
            avatar: "#",
            tagLine: "I am a jelly donut"
          }
        },
        {
          title: "Loading",
          body: "Loading",
          user: {
            username: "Vilhelm",
            avatar: "#",
            tagLine: "I am a jelly donut"
          }
        },
        {
          title: "Loading",
          body: "Loading",
          user: {
            username: "Vilhelm",
            avatar: "#",
            tagLine: "I am a jelly donut"
          }
        },
        {
          title: "Loading",
          body: "Loading",
          user: {
            username: "Vilhelm",
            avatar: "#",
            tagLine: "I am a jelly donut"
          }
        },
        {
          title: "Loading",
          body: "Loading",
          user: {
            username: "Vilhelm",
            avatar: "#",
            tagLine: "I am a jelly donut"
          }
        },
        {
          title: "Loading",
          body: "Loading",
          user: {
            username: "Vilhelm",
            avatar: "#",
            tagLine: "I am a jelly donut"
          }
        },
      ],
    };
  }

  changePage = () => {};

  renderThreads = () =>
    this.state.threads.map(thread => {
      return <ForumPostHeader post={thread} />;
    });

  render() {
    return (
      <div className="mx-2">
        <header className="container bg-info my-2">
          <h2 className="row">
            <span className="col text-center">Hot off the Forums</span>
          </h2>
        </header>
        <div>{this.renderThreads()}</div>
        <ForumPostForm />
      </div>
    );
  }
}

export default ForumHome;
