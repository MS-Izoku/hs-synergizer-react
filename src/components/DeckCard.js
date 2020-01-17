import React from 'react'

const DeckCard = (props) =>{
    return <div className="deck-card">
        <div className="container">
            <p className="row text-center">{props.deck.name !== null ? <p>{props.deck.name}</p>: <p>Deck Name</p> }</p>
            <div className="row deck-divider ">
                <div classame="col left"></div>
                <img classame="col" src="#" alt="set-icon"></div>
                <div classame="col right"></div>
            </div>
            <div className="row">
                
            </div>
        </div>
        <div className="upvotes container">
            <img src="#" alt="upvote-icon"/>
            {props.deck.upvotes !== null : props.deck.upvotes : <p>X</p> }
        </div>
        Deck Card
    </div>
}

export default DeckCard