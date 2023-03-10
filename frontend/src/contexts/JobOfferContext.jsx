import PropTypes from "prop-types";
import axios from "axios";
import { createContext, useContext, useEffect, useState, useMemo } from "react";

const JobOfferContext = createContext();

export const useJobOffer = () => useContext(JobOfferContext);

export function JobOfferProvider({ children }) {
  const [jobOffer, setJobOffer] = useState({});
  const jobOfferMemo = useMemo(() => ({ jobOffer, setJobOffer }), [jobOffer]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/job_offers`)
      .then((res) => setJobOffer(res.data));
  });
  return (
    <JobOfferContext.Provider value={jobOfferMemo}>
      {children}
    </JobOfferContext.Provider>
  );
}

JobOfferProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
