import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Icons/map-pin.svg";

function Container() {
  return (
    <div className="flex flex-col sm:flex-row overflow-x-auto md:overflow-scroll m-10 gap-4">
      <section className="flex-shrink-0 max-w-sm mb-3 mx-auto w-full p-6 bg-white border border-gray-150 rounded-lg shadow-2xl">
        <span>
          <h5 className="mb-2 text-1xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
            Développeur Ruby / Angular H/F
          </h5>
        </span>
        <h2 className="mb-3 font-normal text-left w-full text-grey1">
          Entreprise
        </h2>
        <p className="mb-3 font-normal text-sm text-left w-full text-black">
          Cette start-up de la FoodTech développe une Intelligence Artificielle
          qui analyse les préférences alimentaires et suggère des idées-repas
          personnalisées. Ils viennent de lever des fonds et cherchent donc à
          agrandir leur équipe technique.
        </p>
        <span className="flex items-center">
          <img
            src={Logo}
            alt="Logo localisation"
            className="m4 w-100 h-4 inline-block bg-main-black fill-current"
          />
          <h2 className="order-2 font-normal text-left w-full text-main-dark">
            &nbsp;Lille
          </h2>
          <span className="order-1"> </span>
        </span>
        <div className="border-b border-grey3 border-1 mt-3 mb-3" />
        <Link
          to="/users/"
          className="inline-flex text-main font-bold hover:underline"
        >
          Voir plus
        </Link>
      </section>
      <section className="flex-shrink-0 max-w-sm mb-3 mx-auto w-full p-6 bg-white border border-gray-150 rounded-lg shadow-2xl">
        <span>
          <h5 className="mb-2 text-1xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
            Product Owner H/F
          </h5>
        </span>
        <h2 className="mb-3 font-normal text-left w-full text-grey1">
          Entreprise
        </h2>
        <p className="mb-3 font-normal text-sm text-left w-full text-black">
          Dans le cadre d'une création de pôle, et d'équipe (5 collaborateurs à
          terme), vous êtes l'interface entre la Direction projets groupe, les
          métiers et les équipes de la DSI.
          <br />
          <br />
        </p>
        <span className="flex items-center">
          <img
            src={Logo}
            alt="Logo localisation"
            className="m4 w-100 h-4 inline-block bg-main-black fill-current"
          />
          <h2 className="order-2 font-normal text-left w-full text-main-dark">
            &nbsp;Angers
          </h2>
          <span className="order-1"> </span>
        </span>
        <div className="border-b border-grey3 border-1 mt-3 mb-3" />
        <Link
          to="/users/"
          className="inline-flex text-main font-bold hover:underline"
        >
          Voir plus
        </Link>
      </section>
      <section className="flex-shrink-0 max-w-sm mb-3 mx-auto w-full p-6 bg-white border border-gray-150 rounded-lg shadow-2xl">
        <span>
          <h5 className="mb-2 text-1xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
            Architecte Systèmes Windows H/F
          </h5>
        </span>
        <h2 className="mb-3 font-normal text-left w-full text-grey1">
          Entreprise
        </h2>
        <p className="mb-3 font-normal text-sm text-left w-full text-black">
          Ce groupe en forte croissance (13% par an), présent à l'international,
          souhaite améliorer sa capacité de production avec le déploiement d’un
          service IoT dédié afin de répondre aux enjeux du parc de produits
          connectés. <br />
        </p>
        <span className="flex items-center">
          <img
            src={Logo}
            alt="Logo localisation"
            className="m4 w-100 h-4 inline-block bg-main-black fill-current"
          />
          <h2 className="order-2 font-normal text-left w-full text-main-dark">
            &nbsp;Toulouse
          </h2>
          <span className="order-1"> </span>
        </span>
        <div className="border-b border-grey3 border-1 mt-3 mb-3" />
        <Link
          to="/users/"
          className="inline-flex text-main font-bold hover:underline"
        >
          Voir plus
        </Link>
      </section>
      <section className="flex-shrink-0 max-w-sm mb-3 mx-auto w-full p-6 bg-white border border-gray-150 rounded-lg shadow-2xl">
        <span>
          <h5 className="mb-2 text-1xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
            Architecte Systèmes Windows H/F
          </h5>
        </span>
        <h2 className="mb-3 font-normal text-left w-full text-grey1">
          Entreprise
        </h2>
        <p className="mb-3 font-normal text-sm text-left w-full text-black">
          L’entreprise est une société sur les paris sportifs dont son siège
          social est à Bordeaux. Elle développe des applications de
          divertissement mobile. Vous serez dans une société multiculturelle et
          internationale.
        </p>
        <span className="flex items-center">
          <img
            src={Logo}
            alt="Logo localisation"
            className="m4 w-100 h-4 inline-block bg-main-black fill-current"
          />
          <h2 className="order-2 font-normal text-left w-full text-main-dark">
            &nbsp;Toulouse
          </h2>
          <span className="order-1"> </span>
        </span>
        <div className="border-b border-grey3 border-1 mt-3 mb-3" />
        <Link
          to="/users/"
          className="inline-flex text-main font-bold hover:underline"
        >
          Voir plus
        </Link>
      </section>
    </div>
  );
}

export default Container;
