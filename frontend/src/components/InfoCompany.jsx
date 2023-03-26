import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { useCompanyContext } from "../contexts/CompanyContext";

function InfoCompany({ formErrors, setFormErrors, validate, isSubmit }) {
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
    <form className="m-8 md:grid md:grid-cols-2 md:gap-x-4">
      <h2 className="text-sm text-black text-left font-medium mb-4 md:col-span-2">
        Mes informations
      </h2>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
        >
          Nom de l'entreprise
        </label>
        <input
          type="text"
          id="base-input"
          name="name"
          onChange={(e) => handleInput(e)}
          className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {isSubmit && formErrors.name && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.name}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
        >
          Numéro de SIRET
        </label>
        <input
          type="text"
          id="base-input"
          name="siret"
          onChange={(e) => handleInput(e)}
          className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {isSubmit && formErrors.siret && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.siret}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
        >
          E-mail
        </label>
        <input
          type="text"
          id="base-input"
          name="mail"
          onChange={(e) => handleInput(e)}
          className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {isSubmit && formErrors.mail && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.mail}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
        >
          Téléphone
        </label>
        <input
          type="text"
          id="base-input"
          name="phone"
          onChange={(e) => handleInput(e)}
          className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {isSubmit && formErrors.phone && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.phone}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
        >
          Nombre d'employés
        </label>
        <input
          type="text"
          id="base-input"
          name="number_of_employee"
          onChange={(e) => handleInput(e)}
          className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {isSubmit && formErrors.number_of_employee && (
          <p className="text-sm text-red mb-4 mx-2">
            {formErrors.number_of_employee}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
        >
          Secteur
        </label>
        <input
          type="text"
          id="base-input"
          name="field"
          onChange={(e) => handleInput(e)}
          className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {isSubmit && formErrors.field && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.field}</p>
        )}
      </div>
      <label
        htmlFor="base-input"
        className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
      >
        Localisation
      </label>
      <input
        type="text"
        id="base-input"
        name="location"
        onChange={(e) => handleInput(e)}
        className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:col-span-2"
      />
      {isSubmit && formErrors.location && (
        <p className="text-sm text-red mb-4 mx-2">{formErrors.location}</p>
      )}
      <label
        htmlFor="message"
        className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
      >
        Description
      </label>
      <textarea
        id="message"
        rows="4"
        name="description"
        onChange={(e) => handleInput(e)}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:col-span-2"
        placeholder="..."
      />
      {isSubmit && formErrors.description && (
        <p className="text-sm text-red mb-4 mx-2">{formErrors.description}</p>
      )}
    </form>
  );
}

InfoCompany.propTypes = {
  formErrors: PropTypes.shape().isRequired,
  setFormErrors: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  isSubmit: PropTypes.bool.isRequired,
};

export default InfoCompany;
