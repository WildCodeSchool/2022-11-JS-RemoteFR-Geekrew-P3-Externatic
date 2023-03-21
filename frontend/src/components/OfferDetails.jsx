import React, { useState } from "react";
import { toast } from "react-toastify";
import chevronDown from "../assets/Icons/chevron-down.svg";
import chevronUp from "../assets/Icons/chevron-up.svg";
import MainButton from "./Buttons/MainButton";

import expressAPI from "../services/expressAPI";
import toastError from "../services/toastService";

function OfferDetails() {
  const [openEntreprise, setOpenEntreprise] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [openConsultant, setOpenConsultant] = useState(false);

  const jobOfferId = 1;
  const candidateId = 2;

  const handleSubmit = (e) => {
    e.preventDefault();
    expressAPI
      .post("/candidacies", {
        jobOfferId,
        candidateId,
        candidacyDate: new Date().toISOString().substring(0, 10),
        receivedByCompany: false,
        readByCompany: false,
        companyResponded: false,
      })
      .then(() => {
        toast.success("Votre candidature à bien été prise en compte !", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch(() => toastError("Votre candidature n'a pas pu être envoyée"));
  };

  return (
    <div className="bg-background flex flex-col justify-center">
      <div className="mx-8">
        <div className="bg-white rounded my-4 p-4 flex flex-col justify-center items-center">
          <h1 className="font-jost font-semibold text-xl">
            Titre de l'annonce
          </h1>
        </div>

        {/* Menu déroulant entreprise */}
        <div className="bg-white rounded my-4 p-8 flex flex-col gap-4">
          <div className="flex justify-between">
            <h1 className="font-jost font-semibold text-xl">Entreprise</h1>
            <button
              className="block self-end w-5 rounded"
              type="button"
              onClick={() => setOpenEntreprise(!openEntreprise)}
            >
              {openEntreprise ? (
                <img src={chevronUp} alt="ouvrir" className="h-6 w-6" />
              ) : (
                <img src={chevronDown} alt="ouvrir" className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu déroulant details */}
        <div className="bg-white rounded my-4 p-8 flex flex-col gap-4">
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
                <img src={chevronUp} alt="ouvrir" className="h-6 w-6" />
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
              <p className="text-justify">
                Nous accompagnons un éditeur de logiciel SaaS qui compte 150
                collaborateurs, la société évolue dans le domaine du BTP, et
                développe depuis 2017 une solution SaaS pour faciliter le
                quotidien des acteurs du milieu. La stratégie à long terme de la
                société est de s'étendre à l'international, les premières
                agences étrangères commencent déjà à voir le jour. Dans ce
                contexte novateur et dynamique, vous prenez part à cette
                aventure unique au sein d'une équipe de 15 personnes à Nantes ou
                en full remote !
              </p>
              <h2 className="font-jost font-semibold text-xl">
                Profil recherché
              </h2>
              <p className="text-justify">
                Développeur autonome sur la stack JS et plus particulièrement
                sur node.js et react, vous : Avez de bonnes connaissances de
                Typescript, GraphQL, CSS et de la maintenance de mono-repo; Êtes
                une personne proactive, dynamique et communicante. Témoignez
                d'une expérience dans une équipe de plus de 10 personnes,
                idéalement en environnement start-up/scale-up !
              </p>
              <h2 className="font-jost font-semibold text-xl">Les missions</h2>
              <p className="text-justify">
                Au sein d'une équipe technique de 6 collaborateurs, vos missions
                seront les suivantes : Migrer du code vers de nouveaux
                standards; Implémenter des fonctionnalités sur de nouvelles
                applications; Améliorer l’écosystème de nos outils de
                développement; Participer à la montée en compétence de toute
                l’équipe; Répondre aux besoins et aux questions de développeurs
                avec des problématiques back sous node et front sous react;
                Apporter une expertise lors de décision technique ou de
                chiffrages; Maintenir le code; Assurer une collaboration avec
                les équipes designs et techniques; Optimiser des applications;
                Concevoir et maintenir de la documentation; Participer à la
                résolution d’éventuelles pannes ou erreurs de conception;
              </p>
              <h2 className="font-jost font-semibold text-xl">
                Déroulement des entretiens
              </h2>
              <p className="text-justify">
                RDV avec le responsable produit; Test technique (1h max); RDV
                avec le CTO
              </p>
            </>
          )}
        </div>

        {/* Menu déroulant consultant */}
        <div className="bg-white rounded my-4 p-8 flex flex-col gap-4">
          <div className="flex justify-between">
            <h1 className="font-jost font-semibold text-xl">Mon consultant</h1>
            <button
              className="block self-end w-5 rounded"
              type="button"
              onClick={() => setOpenConsultant(!openConsultant)}
            >
              {openConsultant ? (
                <img src={chevronUp} alt="ouvrir" className="h-6 w-6" />
              ) : (
                <img src={chevronDown} alt="ouvrir" className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <MainButton handleClick={handleSubmit}>Postuler à l'annonce</MainButton>
      </div>
    </div>
  );
}

export default OfferDetails;
