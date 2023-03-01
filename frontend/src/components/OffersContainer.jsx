import React from "react";
import OfferDash from "./OfferDash";

function OffersContainer() {
  return (
    <div className="mx-8">
      <h1 className="font-jost font-semibold text-xl mb-5">
        Les offres qui vous correspondent
      </h1>

      <div className="bg-white rounded p-4 flex flex-col gap-4">
        <OfferDash />
        <OfferDash />
      </div>
    </div>
  );
}

export default OffersContainer;
