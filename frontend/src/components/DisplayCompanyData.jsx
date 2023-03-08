import React from "react";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

function DisplayCompanyData() {
  const { companyFormState } = useCurrentUserContext();

  return (
    <>
      <p>title: {companyFormState.title}</p>
      <p>siret: {companyFormState.siret}</p>
      <p>mail: {companyFormState.mail}</p>
      <p>phone: {companyFormState.phone}</p>
      <p>number_of_employee: {companyFormState.number_of_employee}</p>
      <p>field: {companyFormState.field}</p>
      <p>location: {companyFormState.location}</p>
      <p>description: {companyFormState.description}</p>
      <p>linkedin: {companyFormState.linkedin}</p>
    </>
  );
}

export default DisplayCompanyData;