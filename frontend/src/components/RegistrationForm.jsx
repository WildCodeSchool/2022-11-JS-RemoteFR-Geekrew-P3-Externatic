import { Link, useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

import toastError from "../services/toastService";

function RegistrationForm() {
  const { userType, email, setEmail } = useCurrentUserContext();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const navigateToNextStep = () => {
    localStorage.setItem("email", JSON.stringify(email));
    if (userType === "Candidat") {
      navigate("/Registration-candidate");
    } else {
      navigate("/Registration-company");
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (userType === "" || email === "") {
      toastError("Veuillez renseigner votre email et votre statut");
    } else {
      navigateToNextStep();
    }
  };

  return (
    <div className="font-jost flex flex-col items-center mt-5">
      <h1 className="text-xl font-semibold mt-6 mb-12 md:text-3xl">
        Je m'incrit comme{" "}
        <span className=" text-main italic ">
          <span className="bg-underline bg-no-repeat bg-bottom">
            {userType}
          </span>
        </span>
      </h1>
      <div className="w-[80%] md:max-w-[50%] lg:max-w-[30%]">
        <div className="flex flex-row text-left">
          <p className="text-grey1 text-s pr-4">J'ai déjà un compte ?</p>
          <Link
            to="/Connexion"
            type="button"
            className="text-main font-semibold text-sm underline decoration-2 decoration-main"
          >
            Me connecter
          </Link>
        </div>
        <form
          onSubmit={handleForm}
          className="flex flex-col text-left mt-5 mb-6"
        >
          <div className="mb-5 flex flex-col">
            <label htmlFor="email" className="text-grey1 font-semibold mb-1">
              Adresse mail
            </label>
            <input
              className="border border-grey3 h-10 rounded p-3"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button
            type="submit"
            className="py-3 w-full rounded-full bg-main text-white font-semibold"
          >
            Continuer l'inscription
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
