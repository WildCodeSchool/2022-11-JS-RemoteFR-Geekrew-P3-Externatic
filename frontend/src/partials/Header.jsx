import React from "react";
import Sidenav from "../components/MenuBurger";
import Logo from "../components/Logo";
import ButtonsConnexion from "../components/ButtonsConnexion";

function Header() {
  return (
    <div className="font-jost flex justify-between items-center px-4">
      <div className="flex justify-start items-center">
        <Sidenav />
        <Logo />
      </div>
      <div className="flex">
        <ButtonsConnexion />
      </div>
    </div>
  );
}

export default Header;
