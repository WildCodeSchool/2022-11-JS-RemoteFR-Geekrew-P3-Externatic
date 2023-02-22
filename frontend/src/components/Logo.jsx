import React from "react";
import LogoExternatic from "../assets/Logo-Externatic.svg";

function Logo() {
  return (
    <div className="bg-contain">
      <a href="/" className="logo_link" alt="logo_link">
        <img src={LogoExternatic} alt="LogoExternatic" />
      </a>
    </div>
  );
}

export default Logo;
