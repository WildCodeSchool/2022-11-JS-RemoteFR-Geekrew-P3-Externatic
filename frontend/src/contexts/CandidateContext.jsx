import PropTypes from "prop-types";
import { createContext, useContext, useReducer, useMemo } from "react";
import { candidateReducer } from "../reducers/candidateReducer";

const CandidateContext = createContext();

export const useCandidateContext = () => useContext(CandidateContext);

const initialFormState = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  location: "",
  password: "",
  confirmPassword: "",
  picture: "",
  cv: "",
  age: "",
  gender: "",
  linkedin: "",
  github: "",
  soft_skills: "",
  hard_skills: "",
  roles: '["user", "candidate"]',
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
