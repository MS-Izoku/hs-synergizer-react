import React, { Component } from "react";
import ForumPost from "../components/forum/ForumPost";
import ForumPostHomeCard from "../components/forum/ForumPostHomeCard";

import ForumThread from "../containers/forum/ForumThread";

class ForumHome extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  renderPosts = () => {
    return this.props.posts.map(post => <ForumPostHomeCard post={post} />);
  };

  renderThreads = () => {
    return this.props.threads.map(thread => {
      return <ForumPostHomeCard thread={thread} />;
    });
  };
  render() {
    return (
      <div className="mx-2">
        <header className="container bg-info my-2">
          <h2 className="row">
            <span className="col text-center">Hot off the Forums</span>
          </h2>
        </header>
        {this.renderThreads()}
      </div>
    );
  }
}

export default ForumHome;
