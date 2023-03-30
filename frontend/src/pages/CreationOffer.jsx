/* eslint-disable no-restricted-syntax */
import { useEffect, useState } from "react";
import axios from "axios";
import CompanyJobDescription from "../components/CompanyJobDescription";
import CompanyDescription from "../components/CompanyDescription";
import ButtonSaveOffer from "../components/ButtonSaveOffer";
import { toastError, toastValidation } from "../services/toastService";
import { useOfferContext } from "../contexts/CreationOfferContext";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

const backEndURL = import.meta.env.VITE_BACKEND_URL;
function CreationOffre() {
  const [company, setCompany] = useState({});
  const { OfferFormState, dispatch } = useOfferContext();
  const { userId } = useCurrentUserContext();
  const { ...offer } = OfferFormState;

  useEffect(() => {
    axios
      .get(`${backEndURL}/companies`)
      .then((res) =>
        setCompany(res.data.filter((compa) => compa.user_id === userId))
      );
  }, []);

  useEffect(() => {
    dispatch({
      type: "HANDLE_COMPANYID",
      payload: company.id,
    });
  }, [company]);

  const handleSubmit = () => {
    axios
      .post(`${backEndURL}/job_offers`, offer)
      .then(() => toastValidation("Votre offre a bien été créée"))
      .catch((err) => {
        console.error(err);
        toastError("L'offre n'a pas pu être créée");
      });
  };
  return (
    <div className="bg-background  ">
      <div className="m-10 flex flex-col ">
        <CompanyDescription />
        <CompanyJobDescription />
        <ButtonSaveOffer handleSubmit={handleSubmit} />
        <p>description:{offer.description}</p>
        <p>experience:{offer.experience}</p>
        <p>mission:{offer.mission}</p>
        <p>title:{offer.title}</p>
        <p>company_name:{offer.title}</p>
        <p>localisation:{offer.location}</p>
        <p>lower_salary:{offer.lowerSalary}</p>
        <p>higher_salary:{offer.higherSalary}</p>
        <p>contract:{offer.contract}</p>
        <p>technologies:{offer.technologies}</p>
        <p>interview_run:{offer.interviewRun}</p>
      </div>
    </div>
  );
}

export default CreationOffre;
