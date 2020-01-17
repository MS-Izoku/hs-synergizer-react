import React from 'react'
import DeckCard from '../components/DeckCard'

const DeckCardContainer = (props) =>{
    const renderDecks = () =>{
        if(props.decks.length <= 9){
            props.decks.map(deck => <DeckCard deck={deck}/>)
        }
        else return <p>More than 9</p>
    }
    return <div className="">
        {renderDecks()}
    </div>
}