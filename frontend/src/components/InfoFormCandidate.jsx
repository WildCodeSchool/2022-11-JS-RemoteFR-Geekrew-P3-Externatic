import React from "react";

function InfoFormCandidate() {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className="grid grid-rows-10">
      <h2>Mes informations</h2>
      <div className="flex flex-row">
        <p>Genre</p>
        <input id="woman" name="woman" type="checkbox" />
        <label htmlFor="woman">Je suis une femme</label>
        <input id="man" name="man" type="checkbox" />
        <label htmlFor="man">Je suis un homme</label>
        <input id="other" name="other" type="checkbox" />
        <label htmlFor="other">Autre</label>
      </div>
      <form onSubmit={handleSubmit}>
        <label
          className="mb-2 font-jost font-medium text-gray-900 dark:text-black"
          htmlFor="firstname"
        >
          Prénom *
        </label>
        <input
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          id="firstname"
          name="firstname"
          type="text"
        />
        <label htmlFor="lastname">Nom *</label>
        <input id="lastname" name="lastname" type="text" />
        <label htmlFor="email">E-mail *</label>
        <input id="email" name="email" type="email" />
        <label htmlFor="phone">Téléphone</label>
        <input id="phone" name="phone" type="number" />
        <label htmlFor="language">Langue</label>
        <input id="language" name="language" type="text" />
        <label htmlFor="birth_date">Date de Naissance</label>
        <input id="birth_date" name="birth_date" type="date" />
        <label htmlFor="location">Localisation *</label>
        <input id="location" name="location" type="text" />
      </form>
    </div>
  );
}

export default InfoFormCandidate;
