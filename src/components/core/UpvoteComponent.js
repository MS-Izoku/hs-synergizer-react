import React from "react";
import { MDBIcon } from "mdbreact";

const UpvoteComponent = props => {
  return props.upvoted === true ? (
    <MDBIcon
      className="upvote-icon"
      onClick={() => props.handleClick(props.args)}
      size="xl"
      icon="thumbs-up"
    />
  ) : (
    <MDBIcon
      className="upvote-icon active"
      onClick={() => props.handleClick(props.args)}
      far
      size="xl"
      icon="thumbs-up"
    />
  );
};

export default UpvoteComponent;
