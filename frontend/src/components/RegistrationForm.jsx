import { useState } from "react";
import { Link } from "react-router-dom";

import GitLogo from "../assets/Icons/mdi_github.svg";
import GoogleLogo from "../assets/Icons/Google.svg";
import LinkedinLogo from "../assets/Icons/logos_linkedin-icon.svg";
import SocialButton from "./SocialButton";
import { useUserContext } from "../contexts/UserContext";

function RegistrationForm() {
  const { user } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);

  return (
    <div className="font-jost flex flex-col items-center">
      <h1 className="text-xl font-semibold mt-6 mb-12 md:text-3xl">
        Je m'incrit comme{" "}
        <span className=" text-main italic ">
          <span className="bg-underline bg-no-repeat bg-bottom">{user}</span>
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
        <form className="flex flex-col text-left mt-5 mb-6">
          <div className="mb-5 flex flex-col">
            <label htmlFor="name" className="text-grey1 font-semibold mb-1">
              Nom d'utilisateur
            </label>
            <input
              className="border border-grey3 h-10 rounded mb-4"
              type="text"
              id="text"
              value={name}
              onChange={handleNameChange}
            />
            <label htmlFor="email" className="text-grey1 font-semibold mb-1">
              Adresse mail
            </label>
            <input
              className="border border-grey3 h-10 rounded"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-grey1 font-semibold mb-1">
              Mot de passe
            </label>
            <input
              className="border border-grey3 h-10 rounded"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </form>
        <button
          type="button"
          className="py-3 w-full rounded-full bg-main text-white font-semibold"
        >
          Continuer l'inscription
        </button>
        <div className="flex items-center my-10 font-bold text-grey1">
          <hr className="border border-grey3 grow" />
          <p className="grow-0 bg-white px-3">ou</p>
          <hr className="border border-grey3 grow" />
        </div>
        <div className="mb-10">
          <SocialButton src={LinkedinLogo} alt="logoLinkedin">
            S'inscrire avec Linkedin
          </SocialButton>
          <SocialButton src={GoogleLogo} alt="logoGoogle">
            S'inscrire avec Google
          </SocialButton>
          <SocialButton src={GitLogo} alt="logoGithub">
            S'inscrire avec GitHub
          </SocialButton>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
