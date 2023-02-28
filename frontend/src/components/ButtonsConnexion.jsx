import React from "react";
import login from "../assets/Icons/log-in.svg";
import logout from "../assets/Icons/log-out.svg";

function ButtonsConnexion() {
  return (
    <div className="flex w-32">
      <div className="mx-2 bg-main rounded-full">
        <a href="/SignInCandidate">
          <img src={login} alt="log-in" className="w-12 h-12 p-2" />
        </a>
      </div>
      <div className="mx-2 bg-main rounded-full">
        <a href="/SignInCandidate">
          <img src={logout} alt="log-out" className="w-12 h-12 p-2" />
        </a>
      </div>
    </div>
  );
}

export default ButtonsConnexion;
