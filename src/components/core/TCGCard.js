import React from 'react'

// needs a "card" prop
const TCGCard = (props) =>{
    return <div>
        <img src={props.card.attributes.img} alt="card-img"/>
    </div>
}

export default TCGCard