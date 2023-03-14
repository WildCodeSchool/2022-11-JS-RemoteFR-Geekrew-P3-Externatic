import React from "react";
import { useCompanyContext } from "../contexts/CompanyContext";

function DisplayCompanyData() {
  const { companyFormState } = useCompanyContext();

  return (
    <>
      <p>name: {companyFormState.name}</p>
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
      <p>confirmed_password: {companyFormState.confirmed_password}</p>
    </>
  );
}

export default DisplayCompanyData;
