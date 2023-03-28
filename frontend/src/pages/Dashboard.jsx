import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import OffersContainer from "../components/OffersContainer";
import AdvancedSearchButton from "../components/AdvancedSearchButton";
import FavoriteDash from "../components/FavoriteDash";
import expressAPI from "../services/expressAPI";

function Dashboard() {
  const [jobOffers, setJobOffers] = useState([]);
  useEffect(() => {
    expressAPI.get(`/job_offers`).then((res) => {
      setJobOffers(res.data);
    });
  }, []);

  return (
    <div className="bg-background flex flex-col justify-center">
      <SearchBar />
      <AdvancedSearchButton setJobOffers={setJobOffers} />
      <OffersContainer jobOffers={jobOffers} />
      <FavoriteDash />
    </div>
  );
}

export default Dashboard;
