import React from "react";

function InfosOffer() {
  return (
    <form className="m-8 md:grid md:grid-cols-2 md:gap-x-4">
      <h2 className="">Entreprise</h2>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
        >
          {" "}
        </label>
        <input
          type="text"
          id="base-input"
          name="siret"
          placeholder="Nom de l'entreprise"
          className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {/* {formErrors.siret && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.siret}</p>
        )} */}
      </div>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
        >
          {" "}
        </label>
        <input
          type="text"
          id="base-input"
          name="mail"
          placeholder="Localisation du poste"
          //   onChange={(e) => handleInput(e)}
          className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {/* {formErrors.mail && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.mail}</p>
        )} */}
      </div>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-black"
        >
          Secteur
        </label>
        <input
          type="text"
          id="base-input"
          name="phone"
          //   onChange={(e) => handleInput(e)}
          className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {/* {formErrors.phone && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.phone}</p>
        )} */}
      </div>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-black "
        >
          Salaire
        </label>
        <input
          type="text"
          id="base-input"
          name="number_of_employee"
          placeholder="Salaire Min"
          //   onChange={(e) => handleInput(e)}
          className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {/* {formErrors.number_of_employee && (
          <p className="text-sm text-red mb-4 mx-2">
            {formErrors.number_of_employee}
          </p>
        )} */}
        <input
          type="text"
          id="base-input"
          name="number_of_employee"
          placeholder="Salaire Max"
          //   onChange={(e) => handleInput(e)}
          className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {/* {formErrors.number_of_employee && (
          <p className="text-sm text-red mb-4 mx-2">
            {formErrors.number_of_employee}
          </p>
        )} */}
      </div>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-black"
        >
          Contrat
        </label>
        <input
          type="text"
          id="base-input"
          name="field"
          //   onChange={(e) => handleInput(e)}
          className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {/* {formErrors.field && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.field}</p>
        )} */}
      </div>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-black"
        >
          Technologies
        </label>
        <input
          type="text"
          id="base-input"
          name="field"
          //   onChange={(e) => handleInput(e)}
          className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {/* {formErrors.field && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.field}</p>
        )} */}
      </div>
      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm text-left font-medium text-black"
        >
          Description du poste
        </label>
        <textarea
          id="message"
          rows="4"
          name="description"
          //   onChange={(e) => handleInput(e)}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:col-span-2"
          placeholder="Décrivez-nous le déroulement des entretiens"
        />
        {/* {formErrors.description && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.description}</p>
        )} */}
      </div>
      <label
        htmlFor="base-input"
        className="block mb-2 text-sm text-left font-medium text-black mt-4"
      >
        Expérience
      </label>
      <input
        type="text"
        id="base-input"
        name="location"
        // onChange={(e) => handleInput(e)}
        className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:col-span-2"
      />
      {/* {formErrors.location && (
        <p className="text-sm text-red mb-4 mx-2">{formErrors.location}</p>
      )} */}
      <label
        htmlFor="message"
        className="block mb-2 text-sm text-left font-medium text-black"
      >
        Les missions
      </label>
      <textarea
        id="message"
        rows="4"
        name="description"
        // onChange={(e) => handleInput(e)}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:col-span-2"
        placeholder="Décrivez-nous les missions pour ce poste"
      />
      {/* {formErrors.description && (
        <p className="text-sm text-red mb-4 mx-2">{formErrors.description}</p>
      )} */}
      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm text-left font-medium text-black mt-4"
        >
          Déroulement des entretiens
        </label>
        <textarea
          id="message"
          rows="4"
          name="description"
          //   onChange={(e) => handleInput(e)}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:col-span-2"
          placeholder="Décrivez-nous le déroulement des entretiens"
        />
        {/* {formErrors.description && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.description}</p>
        )} */}
      </div>
    </form>
  );
}

// InfoCompany.propTypes = {
//   formErrors: PropTypes.shape().isRequired,
// };

export default InfosOffer;
