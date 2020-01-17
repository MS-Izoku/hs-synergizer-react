import React from 'react'
import DeckCard from '../components/DeckCard'

const DeckCardContainer = (props) =>{
    console.log(props)
    const renderDecks = () =>{
        if(props.decks.length <= 9){
            return props.decks.map(deck => <DeckCard deck={deck} key={deck.name}/>)
        }
        else return <p>More than 9</p>
    }
    return <div className="landing-card-grid col">
        {renderDecks()}
    </div>
}

export default DeckCardContainer