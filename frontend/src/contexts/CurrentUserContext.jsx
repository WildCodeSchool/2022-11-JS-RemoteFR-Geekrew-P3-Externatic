import { createContext, useContext, useReducer, useMemo } from "react";
import PropTypes from "prop-types";
import candidateReducer from "../reducers/candidateReducer";

const CurrentUserContext = createContext();

export const useCurrentUserContext = () => useContext(CurrentUserContext);

const initialFormState = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  language: "",
  birth_date: "",
  location: "",
};

function CurrentUserContextProvider({ children }) {
  const [formState, dispatch] = useReducer(candidateReducer, initialFormState);
  const userMemo = useMemo(() => ({ formState, dispatch }), [formState]);
  return (
    <CurrentUserContext.Provider value={userMemo}>
      {children}
    </CurrentUserContext.Provider>
  );
}

CurrentUserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CurrentUserContextProvider;
