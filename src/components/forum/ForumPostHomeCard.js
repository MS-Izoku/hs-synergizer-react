import React from "react";
import {createMarkup} from '../..//helperScripts'
import { MDBContainer, MDBCardHeader, MDBIcon, MDBMedia } from "mdbreact";

const ForumPostHomeCard = props => {

  const renderThreadHTML = () => <p dangerouslySetInnerHTML={props.thread.body !== null ? createMarkup(props.thread.body) : createMarkup("Nothing to See Here")} />

  return (
    <MDBContainer className="card my-1">
      <MDBCardHeader className="border-0 font-weight-bold d-flex justify-content-between">
        Header Area
      </MDBCardHeader>
      <MDBMedia className="p-4 bg-white">
        <MDBMedia body>
          <h5 className="font-weight-bold mt-0">{props.thread.title}</h5>
          {renderThreadHTML()}
          Alko
        </MDBMedia>
      </MDBMedia>
    </MDBContainer>
  );
};

export default ForumPostHomeCard;
