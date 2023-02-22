import React from "react";
import linkedin from "../assets/Linkedin-logo-on-transparent-background-PNG.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h1>Externatic</h1>
        <p>
          Externatic est un cabinet dédié au recrutement de profils d'experts,
          ingénieurs et managers dans le domaine de l'informatique
        </p>
        <h2>Contacts</h2>
        <p>
          {" "}
          Tél. +33 (0)2 85 52 26 33 Mail : contact@externantic.fr Adresse : 1
          rue Racine - 44000 Nantes - FRANCE
        </p>
        <p>© 2021 Externatic. All rights reserved.</p>
        <h2>Réseaux</h2>
        <a href="https://www.linkedin.com/company/externatic/">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
