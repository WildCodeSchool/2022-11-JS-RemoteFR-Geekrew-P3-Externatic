import PropTypes from "prop-types";
import { createContext, useContext, useState, useMemo } from "react";

const CurrentUserContext = createContext();

export const useCurrentUserContext = () => useContext(CurrentUserContext);

function CurrentUserContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [userType, setUserType] = useState("");

  const userMemo = useMemo(
    () => ({ user, setUser, userType, setUserType }),
    [user, userType]
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

export default CurrentUserContextProvider;
