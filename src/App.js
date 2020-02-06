import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

//#region page imports
import LandingPage from "./pages/LandingPage";
import ForumHome from "./pages/ForumHome";
import CardDictionary from "./containers/CardDictionary";
import DeckBuilder from './pages/DeckBuilder'
//#endregion

import Footer from "./components/core/Footer";
import Header from "./components/core/Header";

import cardData from "./services/CardDataHandler";
import Paginator from "./components/Paginator";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    const getCardData = cardData.createCardData();
    this.setState({ cards: getCardData.data });
  }

  componentWillUnmount() {
    cardData.clearData();
  }

  render() {
    return (
      <>
        <Header />
        <div id="main-display">
          <Router>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/deck-builder">
              {/* <CardDictionary cards={this.state.cards} /> */}
              <DeckBuilder />
            </Route>

          </Router>
          <Footer />
        </div>
      </>
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
