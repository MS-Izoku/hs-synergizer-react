import React from "react";
import { MDBIcon } from "mdbreact";

const ViewCountComponent = props => {
  return (
    <span>
      <MDBIcon className="page-icon" far icon="eye" />{" "}
      {props.viewCount === undefined ? 0 : props.viewCount}
    </span>
  );
};

export default ViewCountComponent
