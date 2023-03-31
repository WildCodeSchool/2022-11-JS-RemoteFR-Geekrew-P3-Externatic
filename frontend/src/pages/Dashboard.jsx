import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import OffersContainer from "../components/OffersContainer";
import FavoriteDash from "../components/FavoriteDash";
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
    <div className="bg-background flex flex-col justify-center">
      {(roles.includes("candidate") || roles.includes("admin")) && (
        <div>
          <SearchBar />
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
              <OffersContainer jobOffers={jobOffers} />
            </div>
          </div>
          <FavoriteDash />
        </div>
      )}
      {roles.includes("company") && <CompanyDash jobOffers={jobOffers} />}
    </div>
  );
}

export default Dashboard;
