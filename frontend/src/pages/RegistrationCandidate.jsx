import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useCandidateContext } from "../contexts/CandidateContext";
import { toastError, toastValidation } from "../services/toastService";
import CandidateProfilePic from "../components/CandidateProfilePic";
import InfoCandidate from "../components/InfoCandidate";
import ToggleCandidate from "../components/ToggleCandidate";
import SkillsCandidate from "../components/SkillsCandidate";
import NetworksCandidate from "../components/NetworksCandidate";
import CvCandidate from "../components/CvCandidate";
import ValidationCandidate from "../components/ValidationCandidate";

const backEndURL = import.meta.env.VITE_BACKEND_URL;

function RegistrationCandidate() {
  const navigate = useNavigate();

  const { formState } = useCandidateContext();

  const { confirmPassword, ...candidate } = formState;

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    const linkedinRegex =
      /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
    const githubRegex = /^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/?$/;
    if (!values.firstname) {
      errors.firstname = "firstname is required";
    } else if (values.firstname.length < 3 || values.lastname.length > 100) {
      errors.firstname = "Il y a un problème avec votre prénom";
    }
    if (!values.lastname) {
      errors.lastname = "lastname is required";
    } else if (values.lastname.length < 3 || values.lastname.length > 100) {
      errors.lastname = "Il y a un problème avec votre nom de famille";
    }
    if (!values.email) {
      errors.email = "Mail is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Cette adresse mail n'est pas valide";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (Number.isNaN(Number(values.phone))) {
      errors.phone = "Votre numéro de téléphone n'est pas un nombre";
    } else if (values.phone.length < 9 || values.phone.length > 11) {
      errors.phone = "Votre numéro de téléphone n'est pas valide";
    }
    if (!values.location) {
      errors.location = "location is required";
    } else if (values.location.length < 3 || values.location.length > 100) {
      errors.location = "Il y a un problème avec votre localisation";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Le mot de passe doit faire plus de 8 caractères";
    } else if (!passRegex.test(values.password)) {
      errors.password = "Ce mot de passe n'est pas valide";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Password confirmation is required";
    } else if (values.confirmPassword.length < 8) {
      errors.confirmPassword =
        "Le mot de passe doit faire plus de 8 caractères";
    } else if (!passRegex.test(values.confirmPassword)) {
      errors.confirmPassword = "Ce mot de passe n'est pas valide";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword =
        "Les 2 champs de mot de passe ne sont pas similaires";
    }
    if (values.age.length > 0 && Number.isNaN(Number(values.age))) {
      errors.age = "Vous n'avez pas inscrit un nombre";
    }
    if (values.linkedin.length > 0 && !linkedinRegex.test(values.linkedin)) {
      errors.linkedin = "Cette adresse linkedin n'est pas valide";
    }
    if (values.github.length > 0 && !githubRegex.test(values.github)) {
      errors.github = "Cette adresse github n'est pas valide";
    }
    if (!values.soft_skills) {
      errors.soft_skills = "soft_skills is required";
    }
    if (!values.hard_skills) {
      errors.hard_skills = "hard_skills is required";
    }
    return errors;
  };

  const [cvFile, setCvFile] = useState([]);
  const [pictureFile, setPictureFile] = useState([]);

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("cv", cvFile[0]);
    formData.append("picture", pictureFile[0]);
    formData.append("candidate", JSON.stringify(candidate));

    setIsSubmit(true);
    if (Object.keys(formErrors).length > 0) {
      toastError("Vous n'avez pas correctement rempli les champs requis");
    } else if (candidate && Object.keys(formErrors).length === 0) {
      axios
        .post(`${backEndURL}/candidates`, formData, {
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
              Can
              <span className="bg-underline bg-no-repeat bg-bottom">
                didat{" "}
              </span>
              <span className="italic text-black">! </span>
            </span>
          </h1>
        </div>

        <div className="md:bg-white rounded-[10px] p-5">
          <div className="flex flex-row justify-between items-center ml-8 mt-8">
            <CandidateProfilePic
              pictureFile={pictureFile}
              setPictureFile={setPictureFile}
            />
            <ToggleCandidate />
          </div>
          <InfoCandidate
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            isSubmit={isSubmit}
            validate={validate}
          />
          <SkillsCandidate
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            isSubmit={isSubmit}
            validate={validate}
          />
          <div className="flex flex-col justify-start w-full md:grid md:grid-cols-2">
            <CvCandidate cvFile={cvFile} setCvFile={setCvFile} />
            <NetworksCandidate
              formErrors={formErrors}
              setFormErrors={setFormErrors}
              isSubmit={isSubmit}
              validate={validate}
            />
          </div>
          <ValidationCandidate handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default RegistrationCandidate;
