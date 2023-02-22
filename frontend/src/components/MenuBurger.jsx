import React, { useState } from "react";
import iconeBurger from "../assets/menu_burger_icon_191633.png";

function getUserRole() {
  const userRole = localStorage.getItem("userRole");
  return userRole;
}

function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const userRole = getUserRole();

  const modifyNavbar = () => {
    const navBarItems = document.querySelector(".navbar_items");
    const navBarLinks = navBarItems.querySelectorAll(".navbar_link");
    if (userRole === "candidate") {
      navBarLinks[1].textContent = "Mes Candidatures";
      navBarLinks[1].href = "/candidate";
    } else if (userRole === "consultant") {
      navBarLinks[1].textContent = "Modifier une offre";
      navBarLinks[1].href = "/consultant";
    } else if (userRole === "company") {
      navBarLinks[1].textContent = "Créer une offre";
      navBarLinks[1].href = "/company";
    }
  };

  modifyNavbar();

  return (
    <nav className={`sidenav ${isOpen ? "show-nav" : "hide-nav"}`}>
      <div className="navbar_logo">Logo</div>
      <img src={iconeBurger} alt="icone burger" />
      <ul className="navbar_links">
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Offres d'emploi
          </a>
        </li>
        <li className="navbar_item">
          <a href="/about" className="navbar_link">
            Mes Candidatures
          </a>
        </li>
        <li className="navbar_item">
          <a href="/contact" className="navbar_link" alt="Contact">
            Contact
          </a>
        </li>
      </ul>
      <button className="navbar_toggle" onClick={toggleNav} type="button">
        <span className="burger-bar" />
      </button>
    </nav>
  );
}

export default Sidenav;
