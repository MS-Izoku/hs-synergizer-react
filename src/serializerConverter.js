export const convertCardsFromSerializer = cardData => {
    return cardData.data.map(card => {
    return {
      id: card.attributes.id,
      name: card.attributes.name,
      img: card.attributes.img,
      dbfId: card.attributes.dbf_id
    };
  });
};

export const convertSingleCardFromSerializer = cardData => {
  return {
    id: cardData.data.attributes.id,
    name: cardData.data.attributes.name,
    img: cardData.data.attributes.img,
    dbfId: cardData.data.attributes.dbf_id
  };
};
