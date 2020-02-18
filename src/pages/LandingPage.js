import React, { Component } from "react";
import DeckCardContainer from "../containers/DeckCardContainer";
import LandingSplash from "../components/LandingSplash";
import ArticleCard from "../components/ArticleCard";
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      decks: [
        { name: "Deck0", upvotes: 10, set_img: "#", dustCost: 25000 },
        { name: "Deck1", upvotes: 10, set_img: "#", dustCost: 25000 },
        { name: "Deck2", upvotes: 10, set_img: "#", dustCost: 25000 },
        { name: "Deck3", upvotes: 10, set_img: "#", dustCost: 25000 },
        { name: "Deck4", upvotes: 10, set_img: "#", dustCost: 25000 },
        { name: "Deck5", upvotes: 10, set_img: "#", dustCost: 25000 }
      ],
      threads: [
        {
          title: "Forum Thread Header",
          upvotes: 10,
          views: 200
        },
        {
          title: "Forum Thread Header",
          upvotes: 10,
          views: 200
        },
        {
          title: "Forum Thread Header",
          upvotes: 10,
          views: 200
        },
        {
          title: "Forum Thread Header",
          upvotes: 10,
          views: 200
        },
        {
          title: "Forum Thread Header",
          upvotes: 10,
          views: 200
        },
        {
          title: "Forum Thread Header",
          upvotes: 10,
          views: 200
        },
      ],
      expansionGuide: {
        img:
          "https://i.pinimg.com/originals/c8/52/8f/c8528f5de027470ffb7b181d1449874b.jpg",
        title: "The Witchwood"
      },

      article: {
        title: "I am an article!",
        img:
          "https://i.pinimg.com/originals/c8/52/8f/c8528f5de027470ffb7b181d1449874b.jpg",
        author: "Mike Tyson",
        created_at: "2020-02-04 21:38:12"
      }
    };
  }
  render() {
    console.log(this.state.expansionGuide.img);
    return (
      <>
        <section className="page-section">
          <LandingSplash />
          <DeckCardContainer
            decks={this.state.decks}
            containerName="Hot Decks"
          />
        </section>
        <section id="guides" className="page-section">
          <div
            className="expansion-guide drop-shadow"
            style={{
              backgroundImage: `url(${this.state.expansionGuide.img})`
            }}
          >
            <footer>
              <Link to={"/guides"}>
                <h2>{this.state.expansionGuide.title}</h2>
              </Link>
            </footer>
          </div>

          <div id="forums-area" className="drop-shadow">
            {this.state.threads.map(thread => (
              <ForumTab thread={thread} />
            ))}
          </div>
        </section>
        <section id="articles">
          <header className="section-header-wrapper">
            <h2 className="section-header hs-header">News</h2>
          </header>
          <div className="wrapper">
            <div id="main-article" className="article-area">
              <ArticleCard article={this.state.article} main />
            </div>
            <div className="grid article-area">
              <ArticleCard article={this.state.article} />
              <ArticleCard article={this.state.article} />
              <ArticleCard article={this.state.article} />
              <ArticleCard article={this.state.article} />
            </div>
          </div>
        </section>
        <section id="deck-builder-splash" className="bottom-border top-border">
          <div>
            <p>VIDEO GOES HERE</p>
          </div>
        </section>
      </>
    );
  }
}

const ForumTab = props => {
  return (
    <div className="forum-tab bg-info">
      <h2>{props.thread.title}</h2>
      <div >{props.thread.views}</div>
      <div >{props.thread.upvotes}</div>
    </div>
  );
};
