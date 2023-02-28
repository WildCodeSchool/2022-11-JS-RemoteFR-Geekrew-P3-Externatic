import React from "react";
import linkedin from "../assets/Icons/linkedin.svg";

function Footer() {
  return (
    <footer className="font-jost grid grid-cols-3 bg-main-dark fixed bottom-0 text-white">
      <div className="p-4">
        <h2 className="mb-2 font-bold ">Externatic</h2>
        <p className="text-sm">
          Externatic est un cabinet dédié au recrutement de profils d'experts,
          ingénieurs et managers dans le domaine de l'informatique.
        </p>
      </div>
      <div className="p-4">
        <h2 className="mb-2 font-bold">Contacts</h2>
        <p className="text-sm">
          Tél. +33 (0)2 85 52 26 33
          <br />
          Mail : contact@externantic.fr
          <br />
          Adresse : 1 rue Racine - 44000 Nantes - FRANCE
        </p>
      </div>
      <div className="p-4">
        <h2 className="mb-2 font-bold">Réseaux</h2>
        <div className="border-2 rounded-full border-white w-12 align-middle inline-block">
          <a href="https://www.linkedin.com/company/externatic/">
            <img src={linkedin} alt="linkedin" className="p-4" />
          </a>
        </div>
      </div>
      <div className="col-span-3 flex justify-center py-4">
        <p className="text-xs">&copy; 2021 Externatic. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
