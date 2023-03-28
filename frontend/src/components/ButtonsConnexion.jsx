import { Link, useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

import login from "../assets/Icons/log-in.svg";
import logout from "../assets/Icons/power.svg";

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
    <div className="flex mx-2">
      {user ? (
        <div className=" bg-main rounded-full">
          <button
            type="button"
            onClick={handleDisconnection}
            className="w-fit rounded-full p-3"
          >
            <img src={logout} alt="log-out" className="w-8 md:w-6" />
          </button>
        </div>
      ) : (
        <div className=" bg-main rounded-full p-2">
          <Link to="/Connexion">
            <img src={login} alt="log-in" className="w-7 md:w-6" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default ButtonsConnexion;
