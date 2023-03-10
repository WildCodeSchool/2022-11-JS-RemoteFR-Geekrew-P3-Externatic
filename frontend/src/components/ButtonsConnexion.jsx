import { Link, useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

import login from "../assets/Icons/log-in.svg";
import logout from "../assets/Icons/log-out.svg";

import expressAPI from "../services/expressAPI";

function ButtonsConnexion() {
  const { user, setUser } = useCurrentUserContext();
  const navigate = useNavigate();

  const handleDisconnection = () => {
    expressAPI
      .get("/logout")
      .then(() => {
        localStorage.removeItem("user");
        setUser("");
        navigate("/Logout");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex w-32">
      {user ? (
        <div className="mx-2 bg-main rounded-full">
          <button type="button" onClick={handleDisconnection}>
            <img src={logout} alt="log-out" className="w-12 h-12 p-2" />
          </button>
        </div>
      ) : (
        <div className="mx-2 bg-main rounded-full">
          <Link to="/Connexion">
            <img src={login} alt="log-in" className="w-12 h-12 p-2" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default ButtonsConnexion;
