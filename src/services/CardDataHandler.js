const tokenName = "hs-synergizer";
const cardIndexURL = "http://localhost:3000/cards/";

const cardData = {
  // gets the card data and loads it into session storage,
  // if it is found then it returns it
  createCardData: () => {
    // check if the stuff exists in sessionstorage
    if (window.sessionStorage[tokenName] !== undefined) {
      let data = JSON.parse(window.sessionStorage[tokenName]);
      console.log("Data Found!");
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
    cardText: cardData.attributes.card_text,
    cardType: cardData.attributes.card_type,
    cost: cardData.attributes.cost,
    dbfId: cardData.attributes.dbf_id,
    durability: cardData.attributes.durability,
    dustCost: cardData.attributes.dust_cost,
    elite: cardData.attributes.elite,
    flavorText: cardData.attributes.flavor_text,
    health: cardData.attributes.health,
    id: cardData.attributes.id,
    imgGold: cardData.attributes.img_gold
  };
};

const fetchData = () =>
  fetch(cardIndexURL)
    .then(resp => resp.json())
    .then(json => {
      console.log("FETCHING");
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
            cardText: "Cards Cannot Load",
            cardType: "",
            cost: 0,
            dbfId: 0,
            durability: 0,
            dustCost: 0,
            elite: null,
            flavorText: "Cards Cannot Load",
            health: 0,
            id: 0,
            imgGold: ""
          }
        ]
      });
    });
export default cardData;
