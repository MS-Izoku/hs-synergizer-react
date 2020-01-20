import React, { Component } from "react";
import { createMarkup } from "../..//helperScripts";
import { MDBContainer, MDBCardHeader, MDBIcon, MDBMedia } from "mdbreact";

import Comment from "../Comment";
import { tempData } from "../../App";

class ForumPost extends Component {
  constructor() {
    super();
    this.state = {
      inEditor: false,
      body: "<p>Body Text of a Forum Post</p>",
      comments: [tempData.comment]
    };
  }

  renderComments = () => {
    return this.state.comments.map(comment => <Comment comment={comment} />);
  };

  renderPostHTML = () => {
    return <div dangerouslySetInnerHTML={createMarkup(this.state.body)} />;
  };

  render() {
    return (
      <MDBContainer className="card my-1">
        <MDBCardHeader className="border-0 font-weight-bold d-flex justify-content-between">
          Header Area
          <ul className="list-unstyled list-inline mb-0">
            <li className="list-inline-item mr-3">
              <MDBIcon className="mr-2" icon="user" />
              {/* Replace this with the Upvote Img */}
              {this.props.post.upvotes}
            </li>
          </ul>
        </MDBCardHeader>
        <MDBMedia className="p-4 bg-white">
          <MDBMedia body>
            {this.renderPostHTML()}
            <div className="container">
                {this.renderComments()}
            </div>
          </MDBMedia>
        </MDBMedia>
      </MDBContainer>
    );
  }
}

export default ForumPost;
