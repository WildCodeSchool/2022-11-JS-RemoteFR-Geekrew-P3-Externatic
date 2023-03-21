import { useState, useEffect } from "react";

import { useCompanyContext } from "../contexts/CompanyContext";

const validateFormCompany = () => {
  const { companyFormState } = useCompanyContext();

  const { confirmedPassword, ...company } = companyFormState;

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(company);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.siret) {
      errors.siret = "Siret is required";
    }
    if (!values.mail) {
      errors.mail = "Mail is required";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    }
    if (!values.number_of_employee) {
      errors.number_of_employee = "Number of employees is required";
    }
    if (!values.field) {
      errors.field = "Field is required";
    }
    if (!values.location) {
      errors.location = "Location is required";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    if (!values.linkedin) {
      errors.linkedin = "Linkedin is required";
    }
    if (!values.picture) {
      errors.picture = "Picture is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.confirmedPassword) {
      errors.confirmedPassword = "Password confirmation is required";
    }
    return errors;
  };

  setFormErrors(validate(company));
  setIsSubmit(true);

  return formErrors;
};

export default validateFormCompany;
