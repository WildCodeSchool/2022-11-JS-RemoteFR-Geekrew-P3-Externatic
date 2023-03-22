import React, { useState } from "react";
import iconeBurger from "../assets/Icons/menu.svg";

function MenuBurger() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="block p-4 m-2 w-14 rounded"
        onClick={() => setOpen(!isOpen)}
        type="button"
      >
        <img src={iconeBurger} alt="iconeBurger" className="h-6 w-6" />
      </button>
      {isOpen && (
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10 bg-white rounded shadow-md py-2">
          <nav className="text-base font-jost">
            <a
              className="block px-4 py-2 text-gray-900 hover:text-main focus:text-main"
              href="/"
            >
              Offres d'emploi
            </a>
            <a
              className="block px-4 py-2 text-gray-900 hover:text-main focus:text-main "
              href="/Connexion"
            >
              Mes Candidatures
            </a>
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
  );
}

export default MenuBurger;
