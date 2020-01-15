import React from 'react';
import './App.css';

//#region page imports
import DeckBuilder from './pages/DeckBuilder'
import UserProfile from './pages/UserProfile'
//#endregion

class App extends Component() {
  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount(){
  }

  render(){
    return (
      <div className="app">
        <DeckBuilder/>
      </div>
    );
  }
}

export default App;
