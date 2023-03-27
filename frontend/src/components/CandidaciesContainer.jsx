import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import expressAPI from "../services/expressAPI";

import OfferDash from "./OfferDash";

function CandidaciesContainer() {
  const [candidacies, setCandidacies] = useState([]);

  const { candidateId } = useParams();

  useEffect(() => {
    expressAPI
      .get(`/candidacies/${candidateId}`)
      .then((res) => {
        setCandidacies(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mx-8">
      <div className="bg-white rounded my-4 p-4 flex flex-col justify-center items-center">
        <h1 className="font-jost font-semibold text-xl">Mes candidatures</h1>
      </div>
      <div className="bg-white rounded p-4 flex flex-col gap-4">
        {candidacies.map((jobOffer) => (
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

export default CandidaciesContainer;
