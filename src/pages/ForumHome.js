import React, { Component } from "react";
import ForumPost from "../components/forum/ForumPost";
import ForumPostHomeCard from '../components/forum/ForumPostHomeCard'

import ForumThread from '../containers/forum/ForumThread'

class ForumHome extends Component {
    constructor(){
        super()
        this.state={
            posts: []
        }
    }
  renderPosts = () => {
    return this.props.posts.map(post => <ForumPostHomeCard post={post} />);
  };
  render() {
    return <div>Forum Home
        {this.renderPosts()}
    </div>;
  }
}

export default ForumHome;
