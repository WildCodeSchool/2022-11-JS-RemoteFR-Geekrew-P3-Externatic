import { useEffect, useState } from "react";
import expressAPI from "../services/expressAPI";
import CompanyJobDescription from "../components/CompanyJobDescription";
import CompanyDescription from "../components/CompanyDescription";
import ButtonSaveOffer from "../components/ButtonSaveOffer";
import { toastError, toastValidation } from "../services/toastService";
import { useOfferContext } from "../contexts/CreationOfferContext";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

function CreationOffre() {
  const [company, setCompany] = useState({});
  const { OfferFormState, dispatch } = useOfferContext();
  const { userId } = useCurrentUserContext();
  const { ...offer } = OfferFormState;

  useEffect(() => {
    expressAPI.get(`/companies`).then((res) => {
      setCompany(res.data.filter((compa) => compa.user_id === userId));
      if (company.length > 0) {
        dispatch({
          type: "HANDLE_COMPANYID",
          payload: company[0].id,
        });
      }
    }, []);
  });

  const handleSubmit = () => {
    expressAPI
      .post(`/job_offers`, offer)
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
