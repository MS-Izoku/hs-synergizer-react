import React, { Component } from "react";
import "./App.css";

//#region page imports
import DeckBuilder from "./pages/DeckBuilder";
import UserProfile from "./pages/UserProfile";
import LandingPage from './pages/LandingPage'
//#endregion

import Footer from './components/core/Footer'
import Header from './components/core/Header'
import { getCards } from "./AsyncHandler";


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
        const formattedData = cards.data.flat()
        //console.log(formattedData[0].attributes)
        this.setState({cards: formattedData });
        //debugger;
      });
  }

  render() {
    return (
      <div className="app">
        <Header />
        {/* <DeckBuilder cards={this.state.cards} /> */}
        <LandingPage />
        <Footer />
      </div>
    );
  }
}

export default App;
