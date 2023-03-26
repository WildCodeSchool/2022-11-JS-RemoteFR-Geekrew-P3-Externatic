import React, { useState } from "react";
import { Link } from "react-router-dom";
import iconeBurger from "../assets/Icons/menu.svg";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

function MenuBurger() {
  const { user } = useCurrentUserContext();
  const [isOpen, setOpen] = useState(false);

  const candidateId = 2;

  return (
    <div className="relative py-4 my-2 min-h-[56px]">
      {user && (
        <div className="mx-2">
          <button
            className="block  w-14 rounded"
            onClick={() => setOpen(!isOpen)}
            type="button"
          >
            <img src={iconeBurger} alt="iconeBurger" className="h-6 w-6" />
          </button>
          {isOpen && (
            <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10 bg-white rounded shadow-md py-2">
              <nav className="text-base font-jost">
                <a
                  className="block px-4 py-2 text-gray-900 hover:text-main focus:text-main"
                  href="/Dashboard"
                >
                  Offres d'emploi
                </a>
                <Link
                  to={`/Candidacies/${candidateId}`}
                  className="block px-4 py-2 text-gray-900 hover:text-main focus:text-main "
                  href="/Candidacies/:candidateId"
                >
                  Mes Candidatures
                </Link>
                <a
                  className="block px-4 py-2 text-gray-900 hover:text-main focus:text-main"
                  href="/Connexion"
                >
                  Notifications
                </a>
              </nav>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MenuBurger;
