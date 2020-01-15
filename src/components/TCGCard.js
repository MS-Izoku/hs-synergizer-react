import React from 'react'

// needs a "card" prop
const TCGCard = (props) =>{
    return <div id={`${props.card.name}-tcgcard`}>
        <img className="tcg-card-img" src={props.card.card_img} alt={`${props.card.name}`}/>
    </div>
}

export default TCGCard