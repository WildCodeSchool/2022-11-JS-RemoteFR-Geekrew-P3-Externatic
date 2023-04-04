import { Link } from "react-router-dom";

import LogoExternatic from "../assets/Logo-Externatic.svg";

function Logo() {
  return (
    <div className="w-2/4 max-w-xs">
      <Link to="/" className="logo_link" alt="logo_link">
        <img src={LogoExternatic} alt="LogoExternatic" />
      </Link>
    </div>
  );
}

export default Logo;
