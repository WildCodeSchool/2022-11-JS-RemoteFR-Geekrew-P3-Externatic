import PropTypes from "prop-types";
import { createContext, useContext, useState, useMemo } from "react";

const UserContext = createContext();

const useUserContext = () => useContext(UserContext);

function UserContextProvider({ children }) {
  const [user, setUser] = useState("");

  const userMemo = useMemo(() => ({ user, setUser }), [user]);
  return (
    <UserContext.Provider value={userMemo}>{children}</UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserContextProvider, useUserContext };
