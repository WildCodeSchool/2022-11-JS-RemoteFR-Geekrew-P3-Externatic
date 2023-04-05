import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import expressAPI from "../services/expressAPI";
import OfferDash from "./OfferDash";

import { useCurrentUserContext } from "../contexts/CurrentUserContext";

function OffersContainer({ jobOffers, setJobOffers }) {
  const { userId, roles } = useCurrentUserContext();
  const [jobOffersCompany, setJobOffersCompany] = useState([]);
  useEffect(() => {
    if (roles.includes("candidate")) {
      expressAPI
        .get(`/job_offers`)
        .then((res) => {
          setJobOffers(res.data);
        })
        .catch((err) => console.error(err));
    } else {
      expressAPI
        .get(`/job_offers/find/${userId}`)
        .then((res) => {
          setJobOffersCompany(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div className="mx-8">
      {roles.includes("candidate") && (
        <h1 className="font-jost font-semibold text-xl mb-5">
          Les offres qui vous correspondent
        </h1>
      )}
      <div className="bg-white rounded p-4 flex flex-col gap-4">
        {roles.includes("candidate") &&
          jobOffers.map((jobOffer) => (
            <OfferDash
              key={jobOffer.id}
              jobId={jobOffer.id}
              title={jobOffer.title}
              description={jobOffer.description}
              location={jobOffer.location}
              experience={jobOffer.experience}
              lowerSalary={jobOffer.lower_salary}
              higherSalary={jobOffer.higher_salary}
              workHours={jobOffer.work_hours}
              postDate={jobOffer.postDate}
              entreprise={jobOffer.compname}
              field={jobOffer.field}
              technologies={jobOffer.technologies}
            />
          ))}
        {roles.includes("company") &&
          jobOffersCompany.map((jobOffer) => (
            <OfferDash
              key={jobOffer.id}
              jobId={jobOffer.id}
              title={jobOffer.title}
              description={jobOffer.description}
              location={jobOffer.location}
              experience={jobOffer.experience}
              lowerSalary={jobOffer.lower_salary}
              higherSalary={jobOffer.higher_salary}
              workHours={jobOffer.work_hours}
              postDate={jobOffer.postDate}
              entreprise={jobOffer.compname}
              field={jobOffer.field}
              technologies={jobOffer.technologies}
            />
          ))}
      </div>
    </div>
  );
}

OffersContainer.propTypes = {
  jobOffers: PropTypes.shape().isRequired,
  setJobOffers: PropTypes.func.isRequired,
};

export default OffersContainer;
