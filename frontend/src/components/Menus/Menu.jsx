import React from "react";
import { useCurrentUserContext } from "../../contexts/CurrentUserContext";
import NavLink from "./NavLink";

function Menu() {
  const candidateId = 2;
  const { roles } = useCurrentUserContext();
  return (
    <div className="absolute top-12 z-10 -ml-5 bg-white rounded shadow-lg py-2 ">
      <nav className="text-lg font-medium py-4 w-max">
        <NavLink path="Dashboard">Offres d'emploi</NavLink>
        {roles.includes("candidate") && (
          <NavLink path="Candidacies" params={`${candidateId}`}>
            Mes Candidatures
          </NavLink>
        )}
        {roles.includes("company") && (
          <NavLink path="???">Créer une offre</NavLink>
        )}
      </nav>
    </div>
  );
}

export default Menu;
