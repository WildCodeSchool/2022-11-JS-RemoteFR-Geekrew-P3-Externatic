import React, { useEffect, useState } from "react";
import OffersContainer from "../components/OffersContainer";
import expressAPI from "../services/expressAPI";
import CompanyDash from "../components/CompanyDash";
import OfferFilterForm from "../components/OfferFilterForm";

import { useCurrentUserContext } from "../contexts/CurrentUserContext";

function Dashboard() {
  const { roles } = useCurrentUserContext();
  const [jobOffers, setJobOffers] = useState([]);
  useEffect(() => {
    expressAPI.get(`/job_offers`).then((res) => {
      setJobOffers(res.data);
    });
  }, []);

  const [showOfferFilter, setShowOfferFilter] = useState(false);
  const [visibility, setVisibility] = useState("invisible");

  const handleClick = () => {
    setShowOfferFilter((prev) => !prev);
  };

  useEffect(() => {
    if (showOfferFilter === true) {
      setVisibility("visible");
    } else {
      setVisibility("invisible");
    }
  }, [showOfferFilter]);

  return (
    <div className="bg-background flex flex-col justify-center my-8">
      {(roles.includes("candidate") || roles.includes("admin")) && (
        <div>
          <div className="text-center md:invisible md:h-0">
            <button
              type="button"
              onClick={handleClick}
              className="font-jost mx-auto underline underline-offset-4 decoration-2 decoration-main mb-0 md:mb-10 max-w-fit"
            >
              Recherche avancée
            </button>
          </div>
          <div className="grid grid-rows-1 grid-cols-4">
            <div
              className={`${visibility} col-span-4 mr-8 mb-8 md:mr-0 md:col-span-1 md:visible`}
            >
              <OfferFilterForm setJobOffers={setJobOffers} />
            </div>
            <div className="col-span-4 md:col-span-3">
              <OffersContainer
                jobOffers={jobOffers}
                setJobOffers={setJobOffers}
              />
            </div>
          </div>
        </div>
      )}
      {roles.includes("company") && <CompanyDash />}
    </div>
  );
}

export default Dashboard;
