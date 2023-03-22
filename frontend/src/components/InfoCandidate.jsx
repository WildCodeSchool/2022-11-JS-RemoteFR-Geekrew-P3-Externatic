import React, { useState } from "react";
import { useCandidateContext } from "../contexts/CandidateContext";

function InfosCandidate() {
  const { dispatch } = useCandidateContext();

  const initialCheckboxes = {
    man: false,
    woman: false,
    other: false,
  };

  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

  const handleInput = (e) => {
    dispatch({
      type: "HANDLE_INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleAge = (e) => {
    const birthDate = e.target.value;

    const getAge = (date) => {
      const diff = Date.now() - date.getTime();
      const age = new Date(diff);
      return Math.abs(age.getUTCFullYear() - 1970);
    };
    const candidateAge = getAge(new Date(birthDate));
    dispatch({
      type: "HANDLE_INPUT",
      field: e.target.name,
      payload: candidateAge,
    });
  };

  const handleCheckbox = (e) => {
    const boxChecked = e.target.name;
    dispatch({
      type: "HANDLE_CHECKBOX",
      payload: e.target.name,
    });
    setCheckboxes((prevCheckboxes) => {
      const updatedCheckboxes = Object.keys(prevCheckboxes).reduce(
        (acc, key) => {
          if (key === boxChecked) {
            acc[key] = true;
          } else {
            acc[key] = false;
          }
          return acc;
        },
        {}
      );
      return updatedCheckboxes;
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
              onChange={handleCheckbox}
              checked={checkboxes.woman}
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
              onChange={handleCheckbox}
              checked={checkboxes.man}
              className="appearance-none cursor-pointer border-2 border-grey2 w-4 h-4 mt-1 rounded-full checked:bg-main checked:outline checked:outline-1 checked:outline-main-dark checked:border-white checked:ease-in-out checked:duration-75"
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
              onChange={handleCheckbox}
              checked={checkboxes.other}
              className="appearance-none cursor-pointer border-2 border-grey2 w-4 h-4 mt-1 rounded-full checked:bg-main checked:outline checked:outline-1 checked:outline-main-dark checked:border-white checked:ease-in-out checked:duration-75"
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
            name="age"
            type="date"
            onChange={(e) => handleAge(e)}
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
          id="password"
          name="password"
          type="password"
          onChange={(e) => handleInput(e)}
        />
        <label className="mb-2 text-grey2" htmlFor="location">
          Confirmer mot de passe <span className="text-main-dark">*</span>
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-grey1 rounded mb-5 leading-9"
          id="confirm_password"
          name="confirm_password"
          type="password"
          onChange={(e) => handleInput(e)}
        />
      </div>
    </div>
  );
}

export default InfosCandidate;
