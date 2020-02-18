import React from "react";
import { MDBIcon } from "mdbreact";

const UpvoteComponent = props => {
  return (
    <span className="page-icon interactable">
      {props.upvoted === true ? (
        <MDBIcon
          className="page-icon interactable"
          onClick={() => props.handleClick(props.args)}
          size={props.size === undefined ? "xl" : props.size}
          icon="thumbs-up"
        />
      ) : (
        <MDBIcon
          className="page-icon interactable active"
          onClick={() => props.handleClick(props.args)}
          far
          size={props.size === undefined ? "xl" : props.size}
          icon="thumbs-up"
        />
      )}{" "}
      {props.upvotes}
    </span>
  );
};

export default UpvoteComponent;
