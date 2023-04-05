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
    <form className="m-8 mt-0 md:grid md:grid-cols-2 md:gap-x-4">
      <h2 className="text-sm text-black text-left font-medium mb-4 md:col-span-2">
        Mes informations
      </h2>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-grey2"
        >
          Nom de l'entreprise
        </label>
        <input
          type="text"
          id="base-input"
          name="name"
          autoComplete="on"
          onChange={(e) => handleInput(e)}
          className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        {isSubmit && formErrors.name && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.name}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-grey2"
        >
          Numéro de SIRET
        </label>
        <input
          type="text"
          id="base-input"
          name="siret"
          autoComplete="on"
          onChange={(e) => handleInput(e)}
          className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        {isSubmit && formErrors.siret && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.siret}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-grey2"
        >
          E-mail
        </label>
        <input
          type="text"
          id="base-input"
          name="mail"
          autoComplete="on"
          onChange={(e) => handleInput(e)}
          className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        {isSubmit && formErrors.mail && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.mail}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-grey2 "
        >
          Téléphone
        </label>
        <input
          type="text"
          id="base-input"
          name="phone"
          autoComplete="on"
          onChange={(e) => handleInput(e)}
          className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        {isSubmit && formErrors.phone && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.phone}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-grey2 "
        >
          Nombre d'employés
        </label>
        <input
          type="text"
          id="base-input"
          name="number_of_employee"
          autoComplete="on"
          onChange={(e) => handleInput(e)}
          className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
          className="block mb-2 text-sm text-left font-medium text-grey2 "
        >
          Secteur
        </label>
        <input
          type="text"
          id="base-input"
          name="field"
          autoComplete="on"
          onChange={(e) => handleInput(e)}
          className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        {isSubmit && formErrors.field && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.field}</p>
        )}
      </div>
      <label
        htmlFor="base-input"
        className="block mb-2 text-sm text-left font-medium text-grey2"
      >
        Localisation
      </label>
      <input
        type="text"
        id="base-input"
        name="location"
        autoComplete="on"
        onChange={(e) => handleInput(e)}
        className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full px-3 md:col-span-2 leading-9"
      />
      {isSubmit && formErrors.location && (
        <p className="text-sm text-red mb-4 mx-2">{formErrors.location}</p>
      )}
      <label
        htmlFor="message"
        className="block mb-2 text-sm text-left font-medium text-grey2 "
      >
        Description
      </label>
      <textarea
        id="message"
        rows="4"
        name="description"
        autoComplete="on"
        onChange={(e) => handleInput(e)}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 md:col-span-2"
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
