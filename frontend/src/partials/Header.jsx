import React from "react";
import Sidenav from "../components/Menus/MenuBurger";
import Logo from "../components/Logo";
import ButtonsConnexion from "../components/ButtonsConnexion";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

function Header() {
  const { user } = useCurrentUserContext();
  return (
    <div className="font-jost flex justify-between items-center px-4">
      <div className="flex justify-start items-center">
        <div className="relative py-4 my-2 min-h-[56px]">
          {user && <Sidenav />}
        </div>
        <Logo />
      </div>
      <div className="flex">
        <ButtonsConnexion />
      </div>
    </div>
  );
}

export default Header;
