import React, { useState } from "react";
import iconeBurger from "../assets/Icons/menu.svg";

function MenuBurger() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <button
        className="block p-4 m-4 w-14 border border-gray-400 hover:border-gray-500 rounded md:hidden"
        onClick={() => setOpen(!isOpen)}
        type="button"
      >
        <img src={iconeBurger} alt="iconeBurger" className="h-6 w-6" />
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block bg-white rounded shadow-md py-2`}
      >
        <nav className="text-base font-semibold">
          <a
            className="block px-4 py-2 text-gray-900 hover:bg-gray-400"
            href="/"
          >
            Offres d'emploi
          </a>
          <a
            className="block px-4 py-2 text-gray-900 hover:bg-gray-400"
            href="/"
          >
            Mes Candidatures
          </a>
          <a
            className="block px-4 py-2 text-gray-900 hover:bg-gray-400"
            href="/"
          >
            Notifications
          </a>
        </nav>
      </div>
    </div>
  );
}

export default MenuBurger;
