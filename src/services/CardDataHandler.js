const tokenName = "hs-synergizer";
const cardIndexURL = "http://localhost:3000/cards/";

const cardData = {
  // gets the card data and loads it into session storage,
  // if it is found then it returns it
  createCardData: () => {
    const fetchData = fetch(cardIndexURL)
      .then(resp => resp.json())
      .then(json => {
        const parsedCardData = json.data.map(card =>
          parseSingleRawCardData(card)
        );
        const dataTarget = window.sessionStorage.setItem(
          tokenName,
          JSON.stringify({ cards: parsedCardData, perPage: 8 })
        );
        return dataTarget;
      })
      .catch(error => {
        console.log("ERROR:", error);
        debugger;
        return JSON.stringify({
          perPage: 8,
          cards: [
            {
              name: "ERROR",
              img: "",
              attack: 0,
              card_text: "Cards Cannot Load",
              card_type: "",
              cost: 0,
              dbf_id: 0,
              durability: 0,
              dust_cost: 0,
              elite: null,
              flavor_text: "Cards Cannot Load",
              health: 0,
              id: 0,
              img: "",
              img_gold: ""
            }
          ]
        });
      });

    // check if the stuff exists in sessionstorage
    if (window.sessionStorage[tokenName] !== undefined) {
      const data = JSON.parse(window.sessionStorage[tokenName]);
      if (data.cards[0].name === "ERROR") {
        // check if the first object is an error
        console.error("--Cards Cannot be Loaded, Trying Again---");
        data = JSON.parse(fetchData());
      }

      return data;
    } else return fetchData();
  },
  perPage: 8,
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

const parseSingleRawCardData = cardData => {
  return {
    name: cardData.attributes.name,
    img: cardData.attributes.img,
    attack: cardData.attributes.attack,
    card_text: cardData.attributes.card_text,
    card_type: cardData.attributes.card_type,
    cost: cardData.attributes.cost,
    dbf_id: cardData.attributes.dbf_id,
    durability: cardData.attributes.durability,
    dust_cost: cardData.attributes.dust_cost,
    elite: cardData.attributes.elite,
    flavor_text: cardData.attributes.flavor_text,
    health: cardData.attributes.health,
    id: cardData.attributes.id,
    img: cardData.attributes.img,
    img_gold: cardData.attributes.img_gold
  };
};

export default cardData;
