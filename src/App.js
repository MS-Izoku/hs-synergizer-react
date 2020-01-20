import React, { Component } from "react";
import "./App.css";

//#region page imports
import DeckBuilder from "./pages/DeckBuilder";
import UserProfile from "./pages/UserProfile";
import LandingPage from "./pages/LandingPage";
import ForumHome from "./pages/ForumHome";
//#endregion

import Footer from "./components/core/Footer";
import Header from "./components/core/Header";
import { getCards } from "./AsyncHandler";

import Comment from "./components/Comment";
import ForumPost from "./components/forum/ForumPost";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/cards/wild")
      .then(resp => resp.json())
      .then(cards => {
        const formattedData = cards.data.flat();
        this.setState({ cards: formattedData });
      });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <LandingPage />
        <ForumHome threads={tempData.forumThreads} />
        {/* <ForumPost post={tempData.forumThreads[0].posts[0]}/> */}
        <Footer />
      </div>
    );
  }
}

export default App;

export const tempData = {
  comment: {
    body: "<p><strong>I am a Comment!</strong></p>",
    user: {
      username: "Indie",
      avatar: "#"
    }
  },

  posts: [
    {
      title: "Post Title",
      body: "Post Content Goes Here",
      views: 20,
      upvotes: 10,
      downvotes: 0
    }
  ],
  forumThreads: [
    {
      name: "Thread 1",
      title: "Thread Title",
      body: "Content Goes Here",
      views: 20,
      upvotes: 10,
      posts: [
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        }
      ]
    },
    {
      title: "Thread Title",
      body: "Post Body Goes Here",
      views: 20,
      upvotes: 10,
      posts: [
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        },
        {
          content: "Post Content Goes Here",
          views: 20,
          upvotes: 10,
          downvotes: 0
        }
      ]
    }
  ]
};
