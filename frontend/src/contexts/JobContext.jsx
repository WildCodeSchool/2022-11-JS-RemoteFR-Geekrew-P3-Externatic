import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const JobContext = createContext();

function JobContextProvider({ children }) {
  const [jobOffer, setJobOffer] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({});

  const addJobOffer = (newJobOffer) => {
    setJobOffer((prevJobOffer) => [...prevJobOffer, newJobOffer]);
  };

  const removeJobOffer = (jobId) => {
    setJobOffer((prevJobOffer) =>
      prevJobOffer.filter((job) => job.id !== jobId)
    );
  };

  const value = useMemo(
    () => ({
      jobOffer,
      addJobOffer,
      removeJobOffer,
      searchCriteria,
      setSearchCriteria,
    }),
    [jobOffer, searchCriteria]
  );

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
}

JobContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default JobContextProvider;
