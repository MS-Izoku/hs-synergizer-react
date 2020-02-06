import React, { Component } from "react";
import DeckCardContainer from "../containers/DeckCardContainer";
import LandingSplash from "../components/LandingSplash";
import ArticleCard from "../components/ArticleCard";

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

      article: {
        title: "I am an article!",
        img: "",
        author: "Mike Tyson",
        created_at: "2020-02-04 21:38:12"
      }
    };
  }
  render() {
    return (
      <>
        <section className="page-section">
          <LandingSplash />
          <DeckCardContainer
            decks={this.state.decks}
            containerName="Hot Decks"
          />
          {/* <div id="forums-hot" className="bg-info bottom-border">
            <h2>Hot off the Forums</h2>
          </div> */}
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
