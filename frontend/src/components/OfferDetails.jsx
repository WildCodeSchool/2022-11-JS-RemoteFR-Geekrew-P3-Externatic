import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import expressAPI from "../services/expressAPI";
import chevronDown from "../assets/Icons/chevron-down.svg";
import chevronUp from "../assets/Icons/chevron-up.svg";
import map from "../assets/Icons/map-pin.svg";

function OfferDetails() {
  const { jobId } = useParams();

  const [openEntreprise, setOpenEntreprise] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [openConsultant, setOpenConsultant] = useState(false);

  const [offerDetails, setOfferDetails] = useState([]);
  useEffect(() => {
    expressAPI.get(`/job_offers/${jobId}`).then((res) => {
      setOfferDetails(res.data);
    });
  }, []);

  return (
    <div className="bg-background flex flex-col justify-center">
      <div className="bg-white rounded m-4 p-4 flex flex-col justify-center items-center">
        <h1 className="font-jost font-semibold text-xl">
          {offerDetails.title}
        </h1>
      </div>

      {/* Menu déroulant entreprise */}
      <div className="bg-white rounded m-4 p-8 flex flex-col gap-4">
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
            <div>
              <img
                className="m4 w-100 h-4 inline-block bg-main-black fill-current"
                src={map}
                alt="locationLogo"
              />
              <p>{offerDetails.location}</p>
            </div>
          </>
        )}
      </div>

      {/* Menu déroulant details */}
      <div className="bg-white rounded m-4 p-8 flex flex-col gap-4">
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
              Profil recherché
            </h2>
            <p className="text-justify">{offerDetails.profile_needed}</p>
            <h2 className="font-jost font-semibold text-xl">Les missions</h2>
            <p className="text-justify">{offerDetails.mission}</p>
            <h2 className="font-jost font-semibold text-xl">
              Déroulement des entretiens
            </h2>
            <p className="text-justify">{offerDetails.interview_run}</p>
          </>
        )}
      </div>

      {/* Menu déroulant consultant */}
      <div className="bg-white rounded m-4 p-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="font-jost font-semibold text-xl">Mon consultant</h1>
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
    </div>
  );
}

export default OfferDetails;
