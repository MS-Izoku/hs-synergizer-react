const tokenName = "hs-synergizer";
const cardIndexURL = "http://localhost:3000/cards/";

const cardData = {
  createCardData: () => {
    if (window.sessionStorage[tokenName] !== undefined)
      return JSON.parse(window.sessionStorage[tokenName]);
    else
      return fetch(cardIndexURL)
        .then(resp => resp.json())
        .then(json => {
          const dataTarget = window.sessionStorage.setItem(
            tokenName,
            JSON.stringify({ cards: json })
          );
          return dataTarget;
        });
  },
  getData: () => {
    return JSON.parse(window.sessionStorage[tokenName]);
  },
  addToData: cardToAdd => {
    const currentData = JSON.parse(window.sessionStorage.getItem(tokenName));
    if (!currentData.include(cardToAdd)) {
      currentData.cards = { ...currentData.cards, cardToAdd };
    }
    window.sessionStorage.setItem(tokenName, currentData);
    return currentData;
  },
  clearData: () => {
    window.sessionStorage.removeItem(tokenName);
  }
};

export default cardData;
