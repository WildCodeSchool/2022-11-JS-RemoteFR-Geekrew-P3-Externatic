import React from "react";
import Sidenav from "../components/MenuBurger";
import Logo from "../components/Logo";
import Buttonsco from "../components/Buttonsco";

function Header() {
  return (
    <div className="flex justify-between items-center px-4">
      <div className="flex mr-4">
        <Sidenav />
      </div>
      <div className="flex mr-4">
        <Logo />
      </div>
      <div className="flex mr-4">
        <Buttonsco />
      </div>
    </div>
  );
}

export default Header;
