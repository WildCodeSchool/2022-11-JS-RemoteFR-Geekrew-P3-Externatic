import { createContext, useContext, useReducer, useMemo } from "react";
import PropTypes from "prop-types";
import candidateReducer from "../reducers/candidateReducer";

const CandidateContext = createContext();

export const useCandidateContext = () => useContext(CandidateContext);

const initialFormState = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  language: "",
  birth_date: "",
  location: "",
};

function CandidateContextProvider({ children }) {
  const [formState, dispatch] = useReducer(candidateReducer, initialFormState);

  const userMemo = useMemo(
    () => ({ formState, dispatch }),
    [formState, dispatch]
  );

  return (
    <CandidateContext.Provider value={userMemo}>
      {children}
    </CandidateContext.Provider>
  );
}

CandidateContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CandidateContextProvider;
