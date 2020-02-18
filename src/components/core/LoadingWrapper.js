import React, { Component } from "react";

function LoadingWrapper(WrappedComponent, props) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        wrappedProps: props
      };
    }
    render() {
      return (
        <div
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            width: "100%",
            display: "inherit",
            "mix-blend-mode": "multiply"
          }}
        >
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
  };
}

export default LoadingWrapper;
