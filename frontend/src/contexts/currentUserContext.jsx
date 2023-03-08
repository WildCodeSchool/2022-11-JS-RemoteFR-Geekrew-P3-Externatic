import { createContext, useContext, useReducer, useMemo } from "react";
import PropTypes from "prop-types";
import { companyFormReducer } from "../reducers/companyFormReducer";

const CurrentUserContext = createContext();

const useCurrentUserContext = () => useContext(CurrentUserContext);

const initialCompanyFormState = {
  title: "",
  siret: "",
  mail: "",
  phone: "",
  number_of_employee: "",
  field: "",
  location: "",
  description: "",
  linkedin: "",
};

function CurrentUserContextProvider({ children }) {
  const [companyFormState, dispatch] = useReducer(
    companyFormReducer,
    initialCompanyFormState
  );

  const userMemo = useMemo(
    () => ({ companyFormState, dispatch }),
    [companyFormState]
  );

  return (
    <CurrentUserContext.Provider value={userMemo}>
      {children}
    </CurrentUserContext.Provider>
  );
}

CurrentUserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CurrentUserContextProvider, useCurrentUserContext };
