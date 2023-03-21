import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useReducer } from "react";
import { companyFormReducer } from "../reducers/companyFormReducer";

const CompanyContext = createContext();

export const useCompanyContext = () => useContext(CompanyContext);

const initialCompanyFormState = {
  name: "",
  siret: "",
  mail: "",
  phone: "",
  number_of_employee: "",
  field: "",
  location: "",
  description: "",
  linkedin: "",
  picture: "",
  password: "",
  confirmedPassword: "",
};

function CompanyContextProvider({ children }) {
  const [companyFormState, dispatch] = useReducer(
    companyFormReducer,
    initialCompanyFormState
  );

  const userMemo = useMemo(
    () => ({ companyFormState, dispatch }),
    [companyFormState]
  );
  return (
    <CompanyContext.Provider value={userMemo}>
      {children}
    </CompanyContext.Provider>
  );
}

CompanyContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CompanyContextProvider;
