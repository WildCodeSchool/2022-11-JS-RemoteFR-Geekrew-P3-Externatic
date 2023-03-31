import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";
import eye from "../assets/Icons/eye.svg";
import eyeOff from "../assets/Icons/eye-off.svg";

import expressAPI from "../services/expressAPI";
import { toastError } from "../services/toastService";

function ConnexionForm() {
  const { setUser, email, setEmail, setRoles, setUserId, setCandidateId } =
    useCurrentUserContext();

  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleVisibility = () => setPasswordIsVisible(!passwordIsVisible);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      expressAPI
        .post("/login", { mail: email, password })
        .then((res) => {
          const user = {
            mail: res.data.user.mail,
            roles: JSON.parse(res.data.user.roles),
            id: res.data.user.id,
          };

          setUser(user.mail);
          setRoles(user.roles);
          setUserId(user.id);

          if (user.roles.includes("candidate")) {
            expressAPI.get(`/candidates/${user.id}`).then((res2) => {
              setCandidateId(res2.data.id);
            });
          }

          localStorage.setItem("user", JSON.stringify(user));
          navigate("/Dashboard");
        })
        .catch(() => toastError("Le mot de passe ou l'email est incorrect"));
    } else {
      toastError("Veuillez renseigner un email et un mot de passe");
    }
  };

  return (
    <div className="font-jost flex flex-col items-center mt-8">
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
        <div className="flex flex-col text-left mt-5 mb-6">
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
          <div className="flex flex-col">
            <label htmlFor="password" className="text-grey1 font-semibold mb-1">
              Mot de passe
            </label>
            <div className="flex flex-row justify-center items-center align-middle relative mb-10">
              <input
                className="border border-grey3 h-10 rounded w-full"
                type={passwordIsVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                onClick={handleVisibility}
                className="absolute right-3 text-grey2"
              >
                {passwordIsVisible ? (
                  <img src={eye} alt="visible" />
                ) : (
                  <img src={eyeOff} alt="invisible" />
                )}
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="py-3 w-full rounded-full bg-main text-white font-semibold"
          >
            Me connecter
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConnexionForm;
