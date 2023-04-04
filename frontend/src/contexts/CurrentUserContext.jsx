import PropTypes from "prop-types";
import { createContext, useContext, useState, useMemo } from "react";

const CurrentUserContext = createContext();

export const useCurrentUserContext = () => useContext(CurrentUserContext);

function CurrentUserContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState([]);
  const [userId, setUserId] = useState();
  const [candidateId, setCandidateId] = useState();

  const userMemo = useMemo(
    () => ({
      user,
      setUser,
      userType,
      setUserType,
      email,
      setEmail,
      roles,
      setRoles,
      userId,
      setUserId,
      candidateId,
      setCandidateId,
    }),
    [user, userType, email, roles, userId, candidateId]
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
