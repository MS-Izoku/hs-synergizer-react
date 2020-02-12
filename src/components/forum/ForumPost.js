import React, { Component } from "react";
import { createMarkup } from "../../services/helperScripts";
import { MDBContainer, MDBCardHeader, MDBIcon, MDBMedia } from "mdbreact";

import Comment from "../Comment";
import { tempData } from "../../App";

class ForumPost extends Component {
  constructor() {
    super();
    this.state = {
      inEditor: false,
      body: "<p>Body Text of a Forum Post</p>",
      user: { username: "Vilhelm" },
      comments: [tempData.comment]
    };
  }

  renderComments = () => {
    return this.state.comments.map(comment => <Comment comment={comment} />);
  };

  renderPostHTML = () => {
    return <div dangerouslySetInnerHTML={createMarkup(this.props.post.body)} />;
  };

  render() {
    return (
      <div className="bg-white card">
        <div>
          <img src={this.props.post.user.avatar} alt={"user-avatar"} />
          <h2>{this.props.post.user.username}</h2>
        </div>
        <div className="bg-info">
          <header>
            <h2>{this.props.post.title}</h2>
          </header>
          <div className="">{this.renderPostHTML()}</div>
          <hr />
          <div className="">{this.props.post.user.tagLine}</div>
        </div>
      </div>
    );
  }
}

export default ForumPost;
