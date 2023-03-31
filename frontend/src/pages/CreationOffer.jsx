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
    axios.get(`${backEndURL}/companies`).then((res) => {
      // console.log(userId);
      // console.log(res.data);
      // console.log(res.data.filter((compa) => compa.user_id === userId));
      setCompany(res.data.filter((compa) => compa.user_id === userId));
      if (company.length > 0) {
        dispatch({
          type: "HANDLE_COMPANYID",
          payload: company[0].id,
        });
      }
    }, []);
  });
  // useEffect(() => {
  //   axios.get(`${backEndURL}/companies`).then((res) => {
  //     const filteredCompanies = res.data.filter((compa) => compa.user_id === userId);
  //     setCompany(filteredCompanies);
  //     if (filteredCompanies.length > 0) {
  //       dispatch({
  //         type: "HANDLE_COMPANYID",
  //         payload: filteredCompanies[0].id,
  //     }});
  //   }, [dispatch, userId]);

  // useEffect(() => {
  //   if (filteredCompanies.length > 0) {
  //   dispatch({
  //     type: "HANDLE_COMPANYID",
  //     payload: company[0].id,
  //   })};
  // }, [company]);

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
      </div>
    </div>
  );
}

export default CreationOffre;
