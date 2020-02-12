import React, { Component } from "react";

export default class ForumPostForm extends Component {
  constructor() {
    super();
    this.state = {
      postTitle: "",
      postBody: "",
      error: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlesSubmit = event => {
    event.preventDefault();
    if (this.state.postTitle.length > 255) {
      this.setState({ error: "Title must be less than 255 characters long" });
      return;
    } else if (this.state.postTitle.length < 1) {
      this.setState({ error: "You need a title" });
      return;
    }
    if (this.state.postBody === "") {
      this.setState({ error: "Your post body is empty" });
      return;
    }

    console.log("Post to DB here and update state");
  };

  render() {
    return (
      <div id="forum-post-form">
        <form onSubmit={this.handlesSubmit}>
          <input
            name="postTitle"
            className="title"
            onChange={this.handleChange}
            value={this.state.postTitle}
            placeholder="Title..."
          />
          <textarea
            name="postBody"
            onChange={this.handleChange}
            value={this.state.postBody}
            placeholder="Post..."
          />
          <button type="submit">POST</button>
        </form>
        <div
          className={
            this.state.error !== "" ? "error-handler" : this.state.error
          }
        >
          <p>{this.state.error}</p>
        </div>
      </div>
    );
  }
}
