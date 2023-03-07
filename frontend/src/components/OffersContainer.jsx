import React, { useEffect, useState } from "react";
import axios from "axios";
import OfferDash from "./OfferDash";

function OffersContainer() {
  const [jobOffer, setJobOffer] = useState({});
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/job_offers`)
      .then((res) => setJobOffer(res.data));
  });
  return (
    <div className="mx-8">
      <h1 className="font-jost font-semibold text-xl mb-5">
        Les offres qui vous correspondent
      </h1>
      <div className="bg-white rounded p-4 flex flex-col gap-4">
        <OfferDash jobOffer={jobOffer} />
        <OfferDash jobOffer={jobOffer} />
      </div>
    </div>
  );
}

export default OffersContainer;
