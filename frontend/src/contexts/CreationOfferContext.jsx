import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useReducer } from "react";
import { offerReducer } from "../reducers/offerReducer";

const OfferContext = createContext();

export const useOfferContext = () => useContext(OfferContext);

const initialOfferFormState = {
  description: "",
  experience: "",
  mission: "",
  title: "",
  companyId: "",
  location: "",
  lowerSalary: "",
  higherSalary: "",
  contract: "",
  technologies: "",
  interviewRun: "",
};

function OfferContextProvider({ children }) {
  const [OfferFormState, dispatch] = useReducer(
    offerReducer,
    initialOfferFormState
  );

  const userMemo = useMemo(
    () => ({ OfferFormState, dispatch }),
    [OfferFormState]
  );
  return (
    <OfferContext.Provider value={userMemo}>{children}</OfferContext.Provider>
  );
}

OfferContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OfferContextProvider;
