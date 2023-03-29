import React, { useState } from "react";
import iconeBurger from "../../assets/Icons/menu.svg";

import Menu from "./Menu";

function MenuBurger() {
  const [isOpen, setOpen] = useState(false);

  return (
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
  );
}

export default MenuBurger;
