import React  , { Suspense , lazy } from "react";
import TCGCard from "../components/core/TCGCard";
//const TCGCard = lazy(() => import("../components/core/TCGCard"));

const TCGCardContainer = props => {
  const renderCards = () => {
    return props.cards.map(card => {
      return (
          <TCGCard card={card} key={card.attributes.dbf_id} />
      );
    });
  };

  return (
    <div className="card-grid">
      {renderCards()}
    </div>
  );
};

export default TCGCardContainer;
