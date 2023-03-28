import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

import SocialButton from "./Buttons/SocialButton";
import GitLogo from "../assets/Icons/mdi_github.svg";
import GoogleLogo from "../assets/Icons/Google.svg";
import LinkedinLogo from "../assets/Icons/logos_linkedin-icon.svg";

import expressAPI from "../services/expressAPI";
import { toastError } from "../services/toastService";

function ConnexionForm() {
  const { setUser, email, setEmail } = useCurrentUserContext();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      expressAPI
        .post("/login", { mail: email, password })
        .then((res) => {
          setUser(res.data.user.mail);
          localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/Dashboard");
        })
        .catch(() => toastError("Le mot de passe ou l'email est incorrect"));
    } else {
      toastError("Veuillez renseigner un email et un mot de passe");
    }
  };

  return (
    <div className="font-jost flex flex-col items-center">
      <h1 className="text-xl text-center font-semibold mx-7 mt-6 mb-12 md:text-3xl">
        Connectez vous sur votre expace{" "}
        <span className=" text-main italic ">
          Exte
          <span className="bg-underline bg-no-repeat bg-bottom">rnatic</span>
        </span>{" "}
        !
      </h1>
      <div className="w-[80%] md:max-w-[50%] lg:max-w-[30%]">
        <div className="flex flex-row text-left">
          <p className="text-grey1 text-s pr-4">Je n'ai pas de compte ?</p>
          <Link
            to="/Registration"
            className="text-main font-semibold text-sm underline decoration-2 decoration-main"
          >
            M'inscrire
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-left mt-5 mb-6"
        >
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
              className="border border-grey3 h-10 rounded mb-10"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="submit"
            className="py-3 w-full rounded-full bg-main text-white font-semibold"
          >
            Me connecter
          </button>
        </form>
        <div className="flex items-center my-10 font-bold text-grey1">
          <hr className="border border-grey3 grow" />
          <p className="grow-0 bg-white px-3">ou</p>
          <hr className="border border-grey3 grow" />
        </div>
        <div className="mb-10">
          <SocialButton src={LinkedinLogo} alt="logoLinkedin">
            Me connecter avec Linkedin
          </SocialButton>
          <SocialButton src={GoogleLogo} alt="logoGoogle">
            Me connecter avec Google
          </SocialButton>
          <SocialButton src={GitLogo} alt="logoGithub">
            Me connecter avec GitHub
          </SocialButton>
        </div>
      </div>
    </div>
  );
}

export default ConnexionForm;
