import React, { Component } from "react";
import { createMarkup , icons} from "../../services/helperScripts";
import { MDBContainer, MDBCardHeader, MDBIcon, MDBMedia } from "mdbreact";

class ForumPostHomeCard extends Component {
  constructor() {
    super();
    this.state = {
      upvoted: false
    };
  }
  renderThreadHTML = () => (
    <p
      dangerouslySetInnerHTML={
        this.props.thread.body !== null
          ? createMarkup(this.props.thread.body)
          : createMarkup("Nothing to See Here")
      }
    />
  );

  render() {
    return (
      <MDBContainer className="card my-1">
        <MDBCardHeader className="border-0 font-weight-bold d-flex justify-content-between">
          Header Area
          <ul className="list-unstyled list-inline mb-0">
            <li className="list-inline-item mr-3">
              <MDBIcon className="mr-2" icon="envelope" />{" "}
              {/* Replace this with the Views Img*/}
              <img
                src={
                  this.state.upvoted
                    ? icons.upvotes.liked
                    : icons.upvotes.nonLiked
                }
                alt="upvotes-icon"
              />
              {this.props.thread.views}
            </li>
            <li className="list-inline-item mr-3">
              <MDBIcon className="mr-2" icon="user" />{" "}
              {/* Replace this with the Upvote Img */}
              {this.props.thread.upvotes}
            </li>
          </ul>
        </MDBCardHeader>
        <MDBMedia className="p-4 bg-white">
          <MDBMedia body>
            <h5 className="font-weight-bold mt-0">{this.props.thread.title}</h5>
            {this.renderThreadHTML()}
          </MDBMedia>
        </MDBMedia>
      </MDBContainer>
    );
  }
}

export default ForumPostHomeCard;
