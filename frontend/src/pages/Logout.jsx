import { Link } from "react-router-dom";

function Logout() {
  return (
    <div>
      <h1>Vous êtes bien déconnecté !</h1>
      <Link
        to="/"
        className="text-main font-semibold text-sm underline decoration-2 decoration-main"
      >
        Revenir à l'accueil
      </Link>
    </div>
  );
}

export default Logout;
