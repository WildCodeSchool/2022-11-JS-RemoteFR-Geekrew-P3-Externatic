import React from "react";
import axios from "axios";
import { useCurrentUserContext } from "../contexts/currentUserContext";

const backEndURL = import.meta.env.VITE_BACKEND_URL;

function ValidationCompany() {
  const { companyFormState } = useCurrentUserContext();

  const { confirmedPassword, ...company } = companyFormState;

  const handleSubmit = () => {
    // e.preventDefault;

    if (company) {
      axios.post(`${backEndURL}/companies`, company).catch((err) => {
        console.error(err);
        // alert("Le formulaire n'a pas pu être envoyé");
      });
    }
  };

  return (
    <div>
      <div className="m-8 flex flex-col md:flex-row-reverse md:gap-x-10">
        <button
          type="button"
          onClick={handleSubmit}
          className="py-2 px-12 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-main rounded-full border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:scale-110"
        >
          Valider l'inscription
        </button>
        <button
          type="button"
          className="mr-2 mb-2 text-sm font-medium text-main underline hover:no-underline hover:scale-110"
        >
          Annuler
        </button>
      </div>
      <p>title: {companyFormState.title}</p>
      <p>siret: {companyFormState.siret}</p>
      <p>mail: {companyFormState.mail}</p>
      <p>phone: {companyFormState.phone}</p>
      <p>number_of_employee: {companyFormState.number_of_employee}</p>
      <p>field: {companyFormState.field}</p>
      <p>location: {companyFormState.location}</p>
      <p>description: {companyFormState.description}</p>
      <p>linkedin: {companyFormState.linkedin}</p>
      <p>picture: {companyFormState.picture}</p>
      <p>password: {companyFormState.password}</p>
      <p>confirmed_password: {companyFormState.confirmedPassword}</p>
    </div>
  );
}

export default ValidationCompany;
