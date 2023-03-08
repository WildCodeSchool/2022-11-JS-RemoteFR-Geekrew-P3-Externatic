import React, { useEffect, useState } from "react";
import axios from "axios";
import OfferDash from "./OfferDash";

function OffersContainer() {
  const [jobOffers, setJobOffers] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/job_offers`).then((res) => {
      setJobOffers(res.data);
    });
  }, []);

  return (
    <div className="mx-8">
      <h1 className="font-jost font-semibold text-xl mb-5">
        Les offres qui vous correspondent
      </h1>
      <div className="bg-white rounded p-4 flex flex-col gap-4">
        {jobOffers.map((jobOffer) => (
          <OfferDash
            key={jobOffer.id}
            title={jobOffer.title}
            description={jobOffer.description}
            location={jobOffer.location}
            experience={jobOffer.experience}
            lowerSalary={jobOffer.lower_salary}
            higherSalary={jobOffer.higher_salary}
          />
        ))}
      </div>
    </div>
  );
}

export default OffersContainer;
