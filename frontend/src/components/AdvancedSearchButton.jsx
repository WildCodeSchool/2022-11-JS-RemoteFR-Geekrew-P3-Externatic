/* eslint-disable react/prop-types */
import React from "react";
import OfferFilterForm from "./OfferFilterForm";

function AdvancedSearchButton({ setJobOffers, showOfferFilter }) {
  return (
    <div className="text-center">
      {showOfferFilter && <OfferFilterForm setJobOffers={setJobOffers} />}
    </div>
  );
}

export default AdvancedSearchButton;
