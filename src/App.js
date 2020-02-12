import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

//#region page imports
import LandingPage from "./pages/LandingPage";
import ForumHome from "./pages/ForumHome";
import CardDictionary from "./containers/CardDictionary";
import DeckBuilder from "./pages/DeckBuilder";
//#endregion

import Footer from "./components/core/Footer";
import Header from "./components/core/Header";
import SideNavBar from "./components/core/SideNavBar";

import cardData from "./services/CardDataHandler";
import Paginator from "./components/Paginator";
import Credits from "./pages/Credits";
import Error404Page from './pages/Error404Page'

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      sideBarCollapsed: true
    };
  }

  componentDidMount() {
    window.addEventListener("unload", this.onUnload);
    const getCardData = cardData.createCardData();
    this.setState({ cards: getCardData.data });
  }

  componentWillUnmount() {
    window.removeEventListener("unload", this.onUnload);
  }

  onUnload = event => {
    event.preventDefault();
    sessionStorage.clear();
  };

  handleNavToggle = () => {
    this.setState({ sideBarCollapsed: !this.state.sideBarCollapsed });
  };

  render() {
    return (
      <>
        <Header handleNavToggle={this.handleNavToggle} />
        <SideNavBar
          handleNavToggle={this.handleNavToggle}
          collapsed={this.state.sideBarCollapsed}
        />
        <div id="main-display-wrapper">
          <div id="main-display">
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/deck-builder" exact={false}>
              <DeckBuilder />
            </Route>
            <Route path="/forums">
              <ForumHome />
            </Route>
            <Route exact path="/credits" component={Credits} />
            <Route path="/">
              <Error404Page />
            </Route>
            <Footer />
          </div>
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
