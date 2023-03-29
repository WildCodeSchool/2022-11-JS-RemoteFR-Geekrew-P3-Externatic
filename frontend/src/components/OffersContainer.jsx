/* eslint-disable react/prop-types */
import OfferDash from "./OfferDash";

import { useCurrentUserContext } from "../contexts/CurrentUserContext";

function OffersContainer({ jobOffers }) {
  const { roles } = useCurrentUserContext();

  return (
    <div className="mx-8 md:ml-96">
      {roles.includes("candidate") && (
        <h1 className="font-jost font-semibold text-xl mb-5">
          Les offres qui vous correspondent
        </h1>
      )}
      <div className="bg-white rounded p-4 flex flex-col gap-4">
        {jobOffers.map((jobOffer) => (
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

export default OffersContainer;
