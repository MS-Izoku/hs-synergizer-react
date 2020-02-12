import React, { Component } from "react";

export default class ForumPostForm extends Component {
  constructor() {
    super();
    this.state = {
      postTitle: "",
      postBody: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlesSubmit = event => {
    event.preventDefault();
    console.log(this.state)
  };

  render() {
    return (
      <div id="forum-post-form">
        <form onSubmit={this.handlesSubmit}>
          <input
            name="postTitle"
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
      </div>
    );
  }
}
