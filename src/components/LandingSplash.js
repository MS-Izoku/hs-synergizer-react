import React from "react";

const LandingSplash = props => {
  return (
    <div
      className="landing-splash bottom-border"
      style={{
        backgroundImage: `url("${
          props.splashImg === undefined
            ? "https://i.pinimg.com/originals/c8/52/8f/c8528f5de027470ffb7b181d1449874b.jpg"
            : props.splashImg
        }")`
      }}
    >
      <div className="wrapper-col small-padding">
        <h2>What's a Meta?</h2>
        <h3>Play by your own rules</h3>
        <hr />
      </div>
    </div>
  );
};

export default LandingSplash;
