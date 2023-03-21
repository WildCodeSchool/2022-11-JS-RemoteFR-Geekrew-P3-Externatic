import React, { useState } from "react";
import PropTypes from "prop-types";
import chevronDown from "../assets/Icons/chevron-down.svg";
import chevronUp from "../assets/Icons/chevron-up.svg";

function OfferDetails({ description }) {
  const [openEntreprise, setOpenEntreprise] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [openConsultant, setOpenConsultant] = useState(false);

  return (
    <div className="bg-background flex flex-col justify-center">
      <div className="bg-white rounded m-4 p-4 flex flex-col justify-center items-center">
        <h1 className="font-jost font-semibold text-xl">Titre de l'annonce</h1>
      </div>

      {/* Menu déroulant entreprise */}
      <div className="bg-white rounded m-4 p-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="font-jost font-semibold text-xl">Entreprise</h1>
          <button
            className="block self-end w-5 rounded"
            type="button"
            onClick={() => setOpenEntreprise(!openEntreprise)}
          >
            {openEntreprise ? (
              <img src={chevronUp} alt="fermer" className="h-6 w-6" />
            ) : (
              <img src={chevronDown} alt="ouvrir" className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Menu déroulant details */}
      <div className="bg-white rounded m-4 p-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="font-jost font-semibold text-xl">
            Description du poste
          </h2>
          <button
            className="block self-end w-5 rounded"
            type="button"
            onClick={() => setOpenDetails(!openDetails)}
          >
            {openDetails ? (
              <img src={chevronUp} alt="fermer" className="h-6 w-6" />
            ) : (
              <img src={chevronDown} alt="ouvrir" className="h-6 w-6" />
            )}
          </button>
        </div>
        {openDetails && (
          <>
            <p className=" text-grey2 text-sm">
              Depuis 1j - Temps complet - Junior - BTP - 25 - 30 000€
            </p>
            <p className="text-justify">{description}</p>
            <h2 className="font-jost font-semibold text-xl">
              Profil recherché
            </h2>
            <p className="text-justify">
              Développeur autonome sur la stack JS et plus particulièrement sur
              node.js et react, vous : Avez de bonnes connaissances de
              Typescript, GraphQL, CSS et de la maintenance de mono-repo; Êtes
              une personne proactive, dynamique et communicante. Témoignez d'une
              expérience dans une équipe de plus de 10 personnes, idéalement en
              environnement start-up/scale-up !
            </p>
            <h2 className="font-jost font-semibold text-xl">Les missions</h2>
            <p className="text-justify">
              Au sein d'une équipe technique de 6 collaborateurs, vos missions
              seront les suivantes : Migrer du code vers de nouveaux standards;
              Implémenter des fonctionnalités sur de nouvelles applications;
              Améliorer l’écosystème de nos outils de développement; Participer
              à la montée en compétence de toute l’équipe; Répondre aux besoins
              et aux questions de développeurs avec des problématiques back sous
              node et front sous react; Apporter une expertise lors de décision
              technique ou de chiffrages; Maintenir le code; Assurer une
              collaboration avec les équipes designs et techniques; Optimiser
              des applications; Concevoir et maintenir de la documentation;
              Participer à la résolution d’éventuelles pannes ou erreurs de
              conception;
            </p>
            <h2 className="font-jost font-semibold text-xl">
              Déroulement des entretiens
            </h2>
            <p className="text-justify">
              RDV avec le responsable produit; Test technique (1h max); RDV avec
              le CTO
            </p>
          </>
        )}
      </div>

      {/* Menu déroulant consultant */}
      <div className="bg-white rounded m-4 p-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="font-jost font-semibold text-xl">Mon consultant</h1>
          <button
            className="block self-end w-5 rounded"
            type="button"
            onClick={() => setOpenConsultant(!openConsultant)}
          >
            {openConsultant ? (
              <img src={chevronUp} alt="fermer" className="h-6 w-6" />
            ) : (
              <img src={chevronDown} alt="ouvrir" className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

OfferDetails.propTypes = {
  description: PropTypes.string.isRequired,
};

export default OfferDetails;
