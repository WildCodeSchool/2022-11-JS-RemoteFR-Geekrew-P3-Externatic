import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PasswordCompany from "../components/PasswordCompany";
import { toastError, toastValidation } from "../services/toastService";

import { useCompanyContext } from "../contexts/CompanyContext";
import InfoCompany from "../components/InfoCompany";
import NetworksCompany from "../components/NetworksCompany";
import ValidationCompany from "../components/ValidationCompany";
import CompanyProfilePic from "../components/CompanyProfilePic";

const backEndURL = import.meta.env.VITE_BACKEND_URL;

function RegistrationCompany() {
  const navigate = useNavigate();

  const { companyFormState } = useCompanyContext();

  const { confirmedPassword, ...company } = companyFormState;

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [files, setFiles] = useState([]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const linkedinRegex =
      /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
    const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.siret) {
      errors.siret = "Siret is required";
    } else if (Number.isNaN(Number(values.siret))) {
      errors.siret = "Votre siret n'est pas un nombre";
    } else if (values.siret.length !== 14) {
      errors.siret = "Votre siret ne fait pas 14 chiffres";
    }
    if (!values.mail) {
      errors.mail = "Mail is required";
    } else if (!emailRegex.test(values.mail)) {
      errors.mail = "Cette adresse mail n'est pas valide";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (Number.isNaN(Number(values.phone))) {
      errors.phone = "Votre numéro de téléphone n'est pas un nombre";
    } else if (values.phone.length < 9 || values.phone.length > 11) {
      errors.phone = "Votre numéro de téléphone n'est pas valide";
    }
    if (!values.number_of_employee) {
      errors.number_of_employee = "Number of employees is required";
    } else if (Number.isNaN(Number(values.number_of_employee))) {
      errors.number_of_employee = "Vous n'avez pas inscrit un nombre";
    }
    if (!values.field) {
      errors.field = "Field is required";
    } else if (values.field.length > 150) {
      errors.field = "Il y a un problème avec votre secteur d'activité";
    }
    if (!values.location) {
      errors.location = "Location is required";
    } else if (values.location.length < 3 || values.location.length > 100) {
      errors.location = "Il y a un problème avec votre localisation";
    }
    if (!values.description) {
      errors.description = "Description is required";
    } else if (values.description.length < 10) {
      errors.description = "Il y a un problème avec votre description";
    }
    if (!values.linkedin) {
      errors.linkedin = "Linkedin is required";
    } else if (!linkedinRegex.test(values.linkedin)) {
      errors.linkedin = "Cette adresse linkedin n'est pas valide";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Le mot de passe doit faire plus de 8 caractères";
    } else if (!passRegex.test(values.password)) {
      errors.password = "Ce mot de passe n'est pas valide";
    }
    if (!values.confirmedPassword) {
      errors.confirmedPassword = "Password confirmation is required";
    } else if (values.confirmedPassword.length < 8) {
      errors.confirmedPassword =
        "Le mot de passe doit faire plus de 8 caractères";
    } else if (!passRegex.test(values.confirmedPassword)) {
      errors.confirmedPassword = "Ce mot de passe n'est pas valide";
    } else if (values.password !== values.confirmedPassword) {
      errors.confirmedPassword =
        "Les 2 champs de mot de passe ne sont pas similaires";
    }
    return errors;
  };

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("company", JSON.stringify(company));

    setIsSubmit(true);
    if (Object.keys(formErrors).length > 0) {
      toastError("Vous n'avez pas correctement rempli les champs requis");
    } else if (company && Object.keys(formErrors).length === 0) {
      axios
        .post(`${backEndURL}/companies`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(() =>
          toastValidation(
            "Bienvenu.e dans l'aventure Externatic ! Vous pouvez maintenant vous connecter avec vos identifiants."
          )
        )
        .then(() => navigate("/Connexion"))
        .catch((err) => {
          console.error(err);
          toastError(
            "Oups ! Il semblerait que quelque chose ne tourne pas rond..."
          );
        });
    }
  };

  return (
    <div className="md:bg-background">
      <div className="m-8 mx-auto w-11/12 md:w-2/3 lg:w-1/2">
        <div className="flex flex-col items-center">
          <h1 className="font-jost font-bold text-2xl text-left mx-8 my-5">
            Je m'inscrit comme
            <span className="italic text-main">
              {" "}
              Entre
              <span className="bg-underline bg-no-repeat bg-bottom">
                prise{" "}
              </span>
              <span className="italic text-black">! </span>
            </span>
          </h1>
        </div>
        <div className="md:bg-white p-5 rounded-[10px]">
          <div className="mb-4 ml-8 mt-14 flex flex-row items-center justify-start">
            <CompanyProfilePic files={files} setFiles={setFiles} />
          </div>
          <InfoCompany
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            isSubmit={isSubmit}
            validate={validate}
          />
          <NetworksCompany
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            isSubmit={isSubmit}
            validate={validate}
          />
          <PasswordCompany
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            isSubmit={isSubmit}
            validate={validate}
          />
          <ValidationCompany handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default RegistrationCompany;
