import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useCandidateContext } from "../contexts/CandidateContext";
import eye from "../assets/Icons/eye.svg";
import eyeOff from "../assets/Icons/eye-off.svg";

function InfosCandidate({ formErrors, setFormErrors, validate, isSubmit }) {
  const { dispatch, formState } = useCandidateContext();

  const initialCheckboxes = {
    man: false,
    woman: false,
    other: false,
  };

  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [confirmPasswordIsVisible, setConfirmPasswordIsVisible] =
    useState(false);

  const handleInput = (e) => {
    dispatch({
      type: "HANDLE_INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    setFormErrors(validate(formState));
  }, [formState]);

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
            acc[key] = !prevCheckboxes[key];
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
    <div className="grid grid-rows-10 m-8 mt-0 justify-items-start font-jost">
      <h2 className="mb-5">Mes informations</h2>
      <div className="flex flex-row ">
        <p className="mr-7 text-grey2">
          Genre <span className="text-main-dark">*</span>
        </p>
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
        {isSubmit && formErrors.gender && (
          <p className="text-sm text-red mb-6 mt-[-12px] mx-2">
            {formErrors.gender}
          </p>
        )}
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
            autoComplete="on"
            onChange={(e) => handleInput(e)}
          />
          {isSubmit && formErrors.firstname && (
            <p className="text-red text-sm mb-6 mt-[-12px] mx-2">
              {formErrors.firstname}
            </p>
          )}
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
            autoComplete="on"
            onChange={(e) => handleInput(e)}
          />
          {isSubmit && formErrors.lastname && (
            <p className="text-red text-sm mb-6 mt-[-12px] mx-2">
              {formErrors.lastname}
            </p>
          )}
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
            autoComplete="on"
            onChange={(e) => handleInput(e)}
          />
          {isSubmit && formErrors.email && (
            <p className="text-red text-sm mb-6 mt-[-12px] mx-2">
              {formErrors.email}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-grey2" htmlFor="phone">
            Téléphone <span className="text-main-dark">*</span>
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-grey1 rounded mb-5 leading-9"
            id="phone"
            name="phone"
            type="text"
            autoComplete="on"
            onChange={(e) => handleInput(e)}
          />
          {isSubmit && formErrors.phone && (
            <p className="text-red text-sm mb-6 mt-[-12px] mx-2">
              {formErrors.phone}
            </p>
          )}
        </div>
        <div className="flex flex-col md:mr-2">
          <label className="mb-2 text-grey2" htmlFor="location">
            Localisation <span className="text-main-dark">*</span>
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-grey1 rounded mb-5 leading-9"
            id="location"
            name="location"
            type="text"
            autoComplete="on"
            onChange={(e) => handleInput(e)}
          />
          {isSubmit && formErrors.location && (
            <p className="text-red text-sm mb-6 mt-[-12px] mx-2">
              {formErrors.location}
            </p>
          )}
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
            autoComplete="on"
            onChange={(e) => handleAge(e)}
          />
          {isSubmit && formErrors.age && (
            <p className="text-red text-sm mb-6 mt-[-12px] mx-2">
              {formErrors.age}
            </p>
          )}
        </div>
      </form>
      <div className="flex flex-col justify-start w-full">
        <label className="mb-2 text-grey2" htmlFor="location">
          Mot de passe <span className="text-main-dark">*</span>
        </label>
        <div className="flex flex-row justify-center items-center align-middle relative mb-5 w-full">
          <input
            className="bg-gray-50 border border-gray-300 text-grey1 rounded leading-9 w-full"
            id="password"
            name="password"
            type={passwordIsVisible ? "text" : "password"}
            autoComplete="on"
            onChange={(e) => handleInput(e)}
          />
          <button
            type="button"
            onClick={() => setPasswordIsVisible(!passwordIsVisible)}
            className="absolute right-4 text-grey2"
          >
            {passwordIsVisible ? (
              <img src={eye} alt="visible" />
            ) : (
              <img src={eyeOff} alt="invisible" />
            )}
          </button>
        </div>
        {isSubmit && formErrors.password && (
          <p className="text-red text-sm mb-6 mt-[-12px] mx-2">
            {formErrors.password}
          </p>
        )}
        <label className="mb-2 text-grey2" htmlFor="location">
          Confirmer mot de passe <span className="text-main-dark">*</span>
        </label>
        <div className="flex flex-row justify-center items-center align-middle relative mb-5 w-full">
          <input
            className="bg-gray-50 border border-gray-300 text-grey1 rounded leading-9 w-full"
            id="confirmPassword"
            name="confirmPassword"
            type={confirmPasswordIsVisible ? "text" : "password"}
            autoComplete="on"
            onChange={(e) => handleInput(e)}
          />
          <button
            type="button"
            onClick={() =>
              setConfirmPasswordIsVisible(!confirmPasswordIsVisible)
            }
            className="absolute right-4 text-grey2"
          >
            {confirmPasswordIsVisible ? (
              <img src={eye} alt="visible" />
            ) : (
              <img src={eyeOff} alt="invisible" />
            )}
          </button>
        </div>
        {isSubmit && formErrors.confirmPassword && (
          <p className="text-red text-sm mb-6 mt-[-12px] mx-2">
            {formErrors.confirmPassword}
          </p>
        )}
      </div>
    </div>
  );
}

InfosCandidate.propTypes = {
  formErrors: PropTypes.shape().isRequired,
  setFormErrors: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  isSubmit: PropTypes.bool.isRequired,
};

export default InfosCandidate;
