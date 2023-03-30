/* eslint-disable react/prop-types */
import React, { useState } from "react";
import OfferFilterForm from "./OfferFilterForm";

function AdvancedSearchButton({ setJobOffers }) {
  const [showOfferFilter, setShowOfferFilter] = useState(false);

  const handleClick = () => {
    setShowOfferFilter(true);
  };

  return (
    <div className="text-center">
      <button
        type="button"
        onClick={handleClick}
        className="font-jost mx-auto underline underline-offset-4 decoration-2 decoration-main mb-10 max-w-fit"
      >
        Recherche avancée
      </button>
      {showOfferFilter && <OfferFilterForm setJobOffers={setJobOffers} />}
    </div>
  );
}

export default AdvancedSearchButton;
