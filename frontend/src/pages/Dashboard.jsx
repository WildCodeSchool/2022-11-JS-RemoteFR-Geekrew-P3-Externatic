import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import OffersContainer from "../components/OffersContainer";
import AdvancedSearchButton from "../components/AdvancedSearchButton";
import FavoriteDash from "../components/FavoriteDash";
import expressAPI from "../services/expressAPI";
import CompanyDash from "../components/CompanyDash";

import { useCurrentUserContext } from "../contexts/CurrentUserContext";

function Dashboard() {
  const { roles } = useCurrentUserContext();
  const [jobOffers, setJobOffers] = useState([]);
  useEffect(() => {
    expressAPI.get(`/job_offers`).then((res) => {
      setJobOffers(res.data);
    });
  }, []);

  return (
    <div className="bg-background flex flex-col justify-center">
      {(roles.includes("candidate") || roles.includes("admin")) && (
        <>
          <SearchBar />
          <AdvancedSearchButton setJobOffers={setJobOffers} />
          <OffersContainer jobOffers={jobOffers} />
          <FavoriteDash />
        </>
      )}
      {roles.includes("company") && <CompanyDash />}
    </div>
  );
}

export default Dashboard;
