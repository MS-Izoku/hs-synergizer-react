import React , {Component} from 'react'

//#region components
//#endregion

//#region containers
import DeckViewer from '../containers/DeckBuilder/DeckViewer'
import TCGCardContainer from '../containers/TCGCardContainer'
//#endregion

export default class DeckBuilder extends Component{
    constructor(){
        super()
        this.state={
            name: "Unnamed Deck",
            deckClass: {  // populate this with the card class data
                name: "Vanilla"
            },
            allCards: [],
            searchCriteria: "none"
    }

    filterCards = () =>{
        return this.state.allCards.filter(card =>{
            return card // filter by class
        }).filter(card =>{
            return card  // do additional criteria here
        })
    }

    sortCards = (splitNeutrals) =>{
        if(splitNeutrals){
            return this.filterCards().sort(card =>{
                return card // sort cards
            })
        }
        else{
            return this.filterCards().sort(card =>{
                return card // sort cards
            })
        }
    }

    baseSort = (criteria , cards) => {
        if(criteria === "name"){}
        else if(criteria === "cost"){}
        else if(criteria === "attack"){}
        else if(criteria === "health"){}
        return cards
    }



    render(){
        return <div className="user-profile">
            Deck Viewer Page
            <DeckViewer />
            <TCGCardContainer cards={this.filterCards()}/>
        </div>
    }
    }
}