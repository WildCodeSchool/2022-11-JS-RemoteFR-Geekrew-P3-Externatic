import React from "react";
import { useCandidateContext } from "../contexts/CandidateContext";

function InfosCandidate() {
  const { dispatch } = useCandidateContext();

  const handleInput = (e) => {
    dispatch({
      type: "HANDLE_INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <div className="grid grid-rows-10 m-8 justify-items-start font-jost">
      <h2 className="mb-5">Mes informations</h2>
      <div className="flex flex-row ">
        <p className="mr-7 text-grey2">Genre</p>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex flex-row">
            <input
              id="woman"
              name="woman"
              type="checkbox"
              className="appearance-none cursor-pointer border-2 border-grey2 w-4 h-4 mt-1 rounded-full checked:bg-main checked:outline checked:outline-1 checked:outline-main-dark checked:border-white checked:ease-in-out checked:duration-75"
            />
            <label htmlFor="woman" className="ml-3 text-grey2 mr-2">
              Je suis une femme
            </label>
          </div>
          <div className="flex flex-row">
            <input
              id="man"
              name="man"
              type="checkbox"
              className="appearance-none cursor-pointer border-2 border-grey2 w-4 h-4 mt-1 rounded-full checked:bg-main-dark checked:outline checked:outline-1 checked:outline-main-dark checked:border-white checked:ease-in-out checked:duration-75"
            />
            <label htmlFor="man" className="ml-3 text-grey2 mr-2">
              Je suis un homme
            </label>
          </div>
          <div className="flex flex-row">
            <input
              id="other"
              name="other"
              type="checkbox"
              className="appearance-none cursor-pointer border-2 border-grey2 w-4 h-4 mt-1 rounded-full checked:bg-main-dark checked:outline checked:outline-1 checked:outline-main-dark checked:border-white checked:ease-in-out checked:duration-75"
            />
            <label htmlFor="other" className="ml-3 text-grey2">
              Autre
            </label>
          </div>
        </div>
      </div>
      <form className="flex flex-col justify-start w-full md:grid md:grid-cols-2">
        <div className="flex flex-col md:mr-2 ">
          <label className="mb-2 text-grey2" htmlFor="firstname">
            Prénom <span className="text-main-dark">*</span>
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-grey1 rounded mb-5 leading-9 focus:ring-main"
            id="firstname"
            name="firstname"
            type="text"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-grey2" htmlFor="lastname">
            Nom <span className="text-main-dark">*</span>
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-grey1 rounded mb-5 leading-9"
            id="lastname"
            name="lastname"
            type="text"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="flex flex-col md:mr-2">
          <label className="mb-2 text-grey2" htmlFor="email">
            E-mail <span className="text-main-dark">*</span>
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-grey1 rounded mb-5 leading-9"
            id="email"
            name="email"
            type="email"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-grey2" htmlFor="phone">
            Téléphone
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-grey1 rounded mb-5 leading-9"
            id="phone"
            name="phone"
            type="text"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="flex flex-col md:mr-2">
          <label className="mb-2 text-grey2" htmlFor="language">
            Langue
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-grey1 rounded mb-5 leading-9"
            id="language"
            name="language"
            type="text"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-grey2" htmlFor="birth_date">
            Date de Naissance
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-grey1 rounded mb-5 leading-9"
            id="birth_date"
            name="birth_date"
            type="date"
            onChange={(e) => handleInput(e)}
          />
        </div>
      </form>
      <div className="flex flex-col justify-start w-full">
        <label className="mb-2 text-grey2" htmlFor="location">
          Localisation <span className="text-main-dark">*</span>
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-grey1 rounded mb-5 leading-9"
          id="location"
          name="location"
          type="text"
          onChange={(e) => handleInput(e)}
        />
        <label className="mb-2 text-grey2" htmlFor="location">
          Mot de passe <span className="text-main-dark">*</span>
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-grey1 rounded mb-5 leading-9"
          id="location"
          name="password"
          type="password"
        />
        <label className="mb-2 text-grey2" htmlFor="location">
          Confirmer mot de passe <span className="text-main-dark">*</span>
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-grey1 rounded mb-5 leading-9"
          id="location"
          name="confirm_password"
          type="password"
        />
      </div>
    </div>
  );
}

export default InfosCandidate;
