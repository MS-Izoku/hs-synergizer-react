import React , {Component} from 'react'

//#region components
import SaveDeckButton from '../../components/DeckBuilder/SaveDeckButton'
import TCGCardDeckBuilder from '../../components/DeckBuilder/TCGCardDeckBuilder'
//#endregion

export default class DeckViewer extends Component{
    constructor(){
        super()
        this.state = {
            deckCards: []
        }
    }
    renderCards = () =>{
        console.log("RENDERING CARDS IN VIEWER")
       this.props.cards.map(card => <TCGCardDeckBuilder card={card}/>)
    }

    render(){
        return <div className="deck-viewer">
            {/* <SaveDeckButton deck={this.state.deckCards} /> */}
            {this.props.cards.length > 1 ? this.renderCards() : <div> No Cards Found </div>}
        </div>
    }
}