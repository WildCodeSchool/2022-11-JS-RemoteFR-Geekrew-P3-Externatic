import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { useCompanyContext } from "../contexts/CompanyContext";

function PasswordCompany({ formErrors, setFormErrors, validate, isSubmit }) {
  const { dispatch, companyFormState } = useCompanyContext();

  const handleInput = (e) => {
    dispatch({
      type: "HANDLE_INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    setFormErrors(validate(companyFormState));
  }, [companyFormState]);

  return (
    <div className="m-8 mt-0 md:grid md:grid-cols-2 md:gap-x-4">
      <h2 className="text-sm text-black  text-left font-medium mb-4 md:col-span-2">
        Mot de Passe
      </h2>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-grey2"
        >
          Mot de passe
        </label>
        <input
          type="password"
          id="base-input"
          name="password"
          onChange={handleInput}
          className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        {isSubmit && formErrors.password && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.password}</p>
        )}
        <p className="text-xxs text-grey2">
          (Votre mot de passe doit contenir 8 caractères et au moins un chiffre,
          une majuscule et une minuscule)
        </p>
      </div>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
        >
          Confirmer le mot de passe
        </label>
        <input
          type="password"
          id="base-input"
          name="confirmedPassword"
          onChange={handleInput}
          className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {isSubmit && formErrors.confirmedPassword && (
          <p className="text-sm text-red mb-4 mx-2">
            {formErrors.confirmedPassword}
          </p>
        )}
      </div>
    </div>
  );
}

PasswordCompany.propTypes = {
  formErrors: PropTypes.shape().isRequired,
  setFormErrors: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  isSubmit: PropTypes.bool.isRequired,
};

export default PasswordCompany;
