const baseURL = "http://localhost:3000/"
const token = localStorage.token

export const getUserProfile = () =>{
    // return fetch(baseURL + "", {
    //     method: "GET",
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "application/json",
    //     Accept: "application/json"
    // })
    // .then(resp => resp.json())
    // .then(json => {
    //     return json
    // })
}

export const loginUser = () =>{

}

export const logOutUser = () =>{

}

export const postDeck = (deckObj) =>{
    return fetch(baseURL + "", {
        method: "POST",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        body: JSON.stringify({
            name: deckObj.name,
            deck_code: deckObj.deck_code
        })
    })
    .then(resp => resp.json())
    .then(json => {
        return json
    })
}

export const getCards = () =>{
    return fetch(baseURL + "cards/wild")
    .then(resp => resp.json())
    .then(cards => cards)
}