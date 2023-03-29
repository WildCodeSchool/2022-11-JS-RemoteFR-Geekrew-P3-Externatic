import React, { useState } from "react";
import iconeBurger from "../../assets/Icons/menu.svg";
import { useCurrentUserContext } from "../../contexts/CurrentUserContext";

import Menu from "./Menu";

function MenuBurger() {
  const { user } = useCurrentUserContext();
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative py-4 my-2 min-h-[56px]">
      {user && (
        <div className="mx-2">
          <button
            className="block w-14 rounded"
            onClick={() => setOpen(!isOpen)}
            type="button"
          >
            <img src={iconeBurger} alt="iconeBurger" className="h-6 w-6" />
          </button>
          {isOpen && <Menu />}
        </div>
      )}
    </div>
  );
}

export default MenuBurger;
