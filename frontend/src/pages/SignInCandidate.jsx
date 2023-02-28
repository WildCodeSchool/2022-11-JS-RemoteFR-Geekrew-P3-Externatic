import React from "react";
import { useNavigate } from "react-router-dom";

function SignInCandidate() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Inscrivez-vous comme candidat</p>
      <button onClick={() => navigate("/RegistrationCandidate")} type="button">
        Connexion
      </button>
    </div>
  );
}

export default SignInCandidate;
