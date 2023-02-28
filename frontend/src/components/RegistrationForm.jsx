import { useState } from "react";
import GitLogo from "../assets/Icons/mdi_github.svg";
import GoogleLogo from "../assets/Icons/Google.svg";
import LinkedinLogo from "../assets/Icons/logos_linkedin-icon.svg";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className="font-jost flex flex-col items-center">
      <h1 className="text-xl font-semibold mt-6 mb-12 md:text-3xl">
        Je m'incrit comme{" "}
        <span className=" text-main italic ">
          Can<span className="bg-underline bg-no-repeat bg-bottom">didat</span>
        </span>
      </h1>
      <div className="w-[80%] md:max-w-[50%] lg:max-w-[30%]">
        <div className="flex flex-row text-left">
          <p className="text-grey1 text-s pr-4">J'ai déjà un compte ?</p>
          <button
            type="button"
            className="text-main font-semibold text-sm underline decoration-2 decoration-main"
          >
            Me connecter
          </button>
        </div>
        <form className="flex flex-col text-left mt-5 mb-6">
          <div className="mb-5 flex flex-col">
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
        <p className="flex items-center my-10 font-bold text-grey1">
          <hr className="border border-grey3 grow" />
          <span className="grow-0 bg-white px-3">ou</span>
          <hr className="border border-grey3 grow" />
        </p>
        <button
          type="button"
          className="flex justify-center py-3 w-full rounded-full border-2 border-black font-semibold mb-10"
        >
          {" "}
          <img src={LinkedinLogo} alt="logoLinkedin" className="mr-3" />
          S'inscrire avec Linkedin
        </button>
        <button
          type="button"
          className="flex justify-center py-3 w-full rounded-full border-2 border-black font-semibold mb-10"
        >
          <img src={GoogleLogo} alt="logoGoogle" className="mr-3" />
          S'inscrire avec Google
        </button>
        <button
          type="button"
          className="flex justify-center py-3 w-full rounded-full border-2 border-black font-semibold mb-10"
        >
          <img src={GitLogo} alt="logoGithub" className="mr-3" />
          S'inscrire avec GitHub
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;
