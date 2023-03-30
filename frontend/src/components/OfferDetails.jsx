import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import chevronDown from "../assets/Icons/chevron-down.svg";
import chevronUp from "../assets/Icons/chevron-up.svg";
import MainButton from "./Buttons/MainButton";
import CandidateCard from "./CandidateProfile/CandidateCard";

import expressAPI from "../services/expressAPI";
import toastError from "../services/toastService";

import { useCurrentUserContext } from "../contexts/CurrentUserContext";

function OfferDetails() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const { roles, candidateId } = useCurrentUserContext();

  const [openEntreprise, setOpenEntreprise] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [openConsultant, setOpenConsultant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    expressAPI
      .post("/candidacies", {
        jobOfferId: jobId,
        candidateId,
        candidacyDate: new Date().toISOString().substring(0, 10),
        receivedByCompany: false,
        readByCompany: false,
        companyResponded: false,
      })
      .then(() => {
        toast.success("Votre candidature à bien été prise en compte !", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate(`/Candidacies/${candidateId}`);
      })
      .catch(() => toastError("Votre candidature n'a pas pu être envoyée"));
  };

  const [offerDetails, setOfferDetails] = useState([]);
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    expressAPI.get(`/job_offers/${jobId}`).then((res) => {
      setOfferDetails(res.data);
    });
    if (roles.includes("company")) {
      expressAPI
        .get(`/candidacies/job_offers/${jobId}`)
        .then((res) => {
          setCandidates(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div className="bg-background flex flex-col justify-center ">
      <div className="mx-8 md:flex md:flex-row md:gap-4">
        <div className="md:w-2/3">
          <div className="bg-white rounded my-4 p-4 flex flex-col justify-center items-center">
            <h1 className="font-jost font-semibold text-xl">
              {offerDetails.title}
            </h1>
          </div>

          {/* Menu déroulant entreprise */}
          <div className="bg-white rounded my-4 p-8 flex flex-col gap-4">
            <div className="flex justify-between">
              <h1 className="font-jost font-semibold text-xl">
                Entreprise : {offerDetails.name}{" "}
                <span className="font-light text-l">
                  - {offerDetails.company_type}
                </span>
              </h1>
              <button
                className="block self-end w-5 rounded"
                type="button"
                onClick={() => setOpenEntreprise(!openEntreprise)}
              >
                {openEntreprise ? (
                  <img src={chevronUp} alt="fermer" className="h-6 w-6" />
                ) : (
                  <img src={chevronDown} alt="ouvrir" className="h-6 w-6" />
                )}
              </button>
            </div>
            {openEntreprise && (
              <>
                <p>{offerDetails.compdesc}</p>
                <h2 className="font-jost font-semibold text-l">
                  Secteur d'activité :{" "}
                  <span className="font-medium">{offerDetails.field}</span>
                </h2>
                <h2 className="font-jost font-semibold text-l">
                  Nombre d'employés :{" "}
                  <span className="font-medium">
                    {offerDetails.number_of_employee}
                  </span>
                </h2>
              </>
            )}
          </div>

          {/* Menu déroulant details */}
          <div className="bg-white rounded my-4 p-8 flex flex-col gap-4">
            <div className="flex justify-between">
              <h2 className="font-jost font-semibold text-xl">
                Description du poste
              </h2>
              <button
                className="block self-end w-5 rounded"
                type="button"
                onClick={() => setOpenDetails(!openDetails)}
              >
                {openDetails ? (
                  <img src={chevronUp} alt="fermer" className="h-6 w-6" />
                ) : (
                  <img src={chevronDown} alt="ouvrir" className="h-6 w-6" />
                )}
              </button>
            </div>
            {openDetails && (
              <>
                <p className=" text-grey2 text-sm">
                  Depuis {offerDetails.postDate}j - {offerDetails.work_hours}h -{" "}
                  {offerDetails.experience} - {offerDetails.field} -{" "}
                  {offerDetails.lower_salary}-{offerDetails.higher_salary}€
                </p>
                <p className="text-justify">{offerDetails.description}</p>
                <h2 className="font-jost font-semibold text-xl">
                  Description du poste
                </h2>
                <p className="text-justify">{offerDetails.profile_needed}</p>
                <h2 className="font-jost font-semibold text-xl">
                  Les missions
                </h2>
                <p className="text-justify">{offerDetails.mission}</p>
                <h2 className="font-jost font-semibold text-xl">
                  Déroulement des entretiens
                </h2>
                <p className="text-justify">{offerDetails.interview_run}</p>
              </>
            )}
          </div>

          {/* Menu déroulant consultant */}
          <div className="bg-white rounded my-4 p-8 flex flex-col gap-4">
            <div className="flex justify-between">
              <h1 className="font-jost font-semibold text-xl">
                Mon consultant
              </h1>
              <button
                className="block self-end w-5 rounded"
                type="button"
                onClick={() => setOpenConsultant(!openConsultant)}
              >
                {openConsultant ? (
                  <img src={chevronUp} alt="fermer" className="h-6 w-6" />
                ) : (
                  <img src={chevronDown} alt="ouvrir" className="h-6 w-6" />
                )}
              </button>
            </div>
            {openConsultant && (
              <>
                <p>
                  Name : {offerDetails.firstname} {offerDetails.lastname}
                </p>
                <p>Mail : {offerDetails.mail}</p>
                <p>Phone : {offerDetails.phone}</p>
                <p>Linkedin : {offerDetails.linkedin}</p>
              </>
            )}
          </div>
          {roles.includes("candidate") && (
            <MainButton handleClick={handleSubmit}>
              Postuler à l'annonce
            </MainButton>
          )}
        </div>
        {roles.includes("company") && (
          <div className="md:w-1/3">
            <div className="bg-white rounded my-4 p-4 flex flex-col justify-center items-center">
              <h1 className="font-jost font-semibold text-xl">
                Mes can
                <span className="underline decoration-8 decoration-main-light">
                  didats
                </span>
              </h1>
            </div>
            {candidates.length === 0 && (
              <p className="my-8 text-center">
                Aucun candidat n'a postulé pour le moment.
              </p>
            )}
            {candidates.map((candidate) => (
              <CandidateCard
                key={candidate.candidate_id}
                lastname={candidate.lastname}
                firstname={candidate.firstname}
                location={candidate.location}
                userId={candidate.userId}
                picture={candidate.picture}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OfferDetails;
