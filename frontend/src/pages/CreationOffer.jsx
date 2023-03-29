import React, { useState } from "react";
import axios from "axios";
import CompanyJobDescription from "../components/CompanyJobDescription";
import CompanyDescription from "../components/CompanyDescription";
import ButtonSaveOffer from "../components/ButtonSaveOffer";
import { toastError, toastValidation } from "../services/toastService";
import { useOfferContext } from "../contexts/CreationOfferContext";

const backEndURL = import.meta.env.VITE_BACKEND_URL;
function CreationOffre() {
  const { OfferFormState } = useOfferContext();

  const { ...offer } = OfferFormState;
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("offer", JSON.stringify(offer));

    setIsSubmit(true);
    if (offer.length === 0) {
      axios
        .post(`${backEndURL}/job_offers`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(() => toastValidation("Votre offre a bien été créée"))
        .catch((err) => {
          console.error(err);
          toastError("L'offre n'a pas pu être créée");
        });
    }
  };
  return (
    <div className="bg-background  ">
      <div className="m-10 flex flex-col ">
        <CompanyDescription isSubmit={isSubmit} />
        <CompanyJobDescription isSubmit={isSubmit} />
        <ButtonSaveOffer handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default CreationOffre;
