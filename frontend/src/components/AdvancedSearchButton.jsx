import React from "react";
import PropTypes from "prop-types";
import OfferFilterForm from "./OfferFilterForm";

function AdvancedSearchButton({ setJobOffers, showOfferFilter }) {
  return (
    <div className="text-center">
      {showOfferFilter && <OfferFilterForm setJobOffers={setJobOffers} />}
    </div>
  );
}
AdvancedSearchButton.propTypes = {
  setJobOffers: PropTypes.func.isRequired,
  showOfferFilter: PropTypes.bool.isRequired,
};
export default AdvancedSearchButton;
