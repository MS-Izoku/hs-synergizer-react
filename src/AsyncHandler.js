const baseURL = "http://localhost:3000/"
const token = localStorage.token

export const GetUserProfile = () =>{
    return fetch(baseURL + "", {
        method: "GET",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json"
    })
    .then(resp => resp.json())
    .then(json => {
        return json
    })
}

export const LoginUser = () =>{

}

export const LogOutUser = () =>{

}

export const PostDeck = (deckObj) =>{
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

export const GetCards = () =>{
    return fetch(baseURL + "")
    .then(resp => resp.json())
    .then(cards => cards)
}