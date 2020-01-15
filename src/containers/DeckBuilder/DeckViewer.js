import React , {Component} from 'react'

//#region components
import SaveDeckButton from '../../components/DeckBuilder/SaveDeckButton'
import TCGCardDeckBuilder from '../../components/DeckBuilder/TCGCardDeckBuilder'
//#endregion

export default class DeckViewer extends Component{
    constructor(){
        super()
        this.state = {
            cards = []
        }
    }

    renderCards = () =>{
       this.state.cards.map(card => <TCGCardDeckBuilder card={card}/>)
    }

    render(){
        return <div className="deck-viewer">
            <SaveDeckButton deck={cards} />
            {this.state.cards.length > 1 ? this.renderCards() : null}
        </div>
    }
}