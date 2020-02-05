import React, { Component } from "react";
import {
  MDBContainer,
  MDBCardHeader,
  MDBIcon,
  MDBMedia
  //   MDBBtn,
  //   MDBPageItem,
  //   MDBPagination,
  //   MDBPageNav
} from "mdbreact";
import { createMarkup, icons } from "../services/helperScripts";

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      upvotes: 0,
      isUpvoted: false,
      comments: [
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0,
          user: {
            username: "user",
            avatar: "#"
          }
        }
      ]
    };
  }
  handleLike = () => {
    const newCount = this.state.isUpvoted
      ? --this.state.upvotes
      : ++this.state.upvotes;
    this.setState({ upvotes: newCount, isUpvoted: !this.state.isUpvoted });
  };

  componentDidMount() {
    this.setState({ upvotes: 1 });
  }

  renderSubComment = () => {
    //return this.state.comments.map(comment => <Comment comment={comment} />);
  };

  render() {
    return (
      <MDBContainer className="card bg-info">
        <MDBMedia className="d-block d-md-flex mt-4">
          <img
            className="card-img-64 d-flex mx-auto mb-3"
            src={this.props.comment.user.avatar}
            alt={`${this.props.comment.user.username}-avatar`}
          />
          <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
            <h5 className="font-weight-bold mt-0">
              {this.props.comment.user.username !== null
                ? this.props.comment.user.username
                : "HS-Synergizer User"}
              <MDBIcon icon="reply" className="pull-right ml-2" />
            </h5>
            <p
              dangerouslySetInnerHTML={
                this.props.comment.body !== null
                  ? createMarkup(this.props.comment.body)
                  : null
              }
            />
            <div className="">
              <img
                src={
                  this.state.isUpvoted
                    ? icons.upvotes.liked
                    : icons.upvotes.nonLiked
                }
                alt="upvote-img"
                onClick={this.handleLike}
              />
              {this.props.comment.upvotes}
            </div>
          </MDBMedia>
        </MDBMedia>

        <hr className="bg-danger comment-divider" />
        {this.renderSubComment()}
      </MDBContainer>
    );
  }
}

export default Comment;
