import React from 'react'

const SaveDeckButton = (props) =>{

    const saveDeck = () =>{
        console.log("Saving Deck")
        // do something with props.deck
    }
    return <button onClick={saveDeck}>Save Deck</button>
}

export default SaveDeckButton