import React from "react";
import login from "../assets/Icons/log-in.svg";
import logout from "../assets/Icons/log-out.svg";

function Buttonsco() {
  return (
    <div className="flex mr-4">
      <a href="/SignInCandidate" className="mr-3">
        <img src={login} alt="log-in" className="h-6 w-6" />
      </a>
      <a href="/SignInCandidate">
        <img src={logout} alt="log-out" className="h-6 w-6" />
      </a>
    </div>
  );
}

export default Buttonsco;
