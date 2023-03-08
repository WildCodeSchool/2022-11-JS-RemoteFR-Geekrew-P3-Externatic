import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import localisationIcon from "../assets/Icons/map-pin.svg";
import FakePP from "../assets/images/Fake-PP.png";
import favIcon from "../assets/Icons/heart.svg";
import Tags from "./Tags";

function OfferDash({
  title,
  description,
  location,
  experience,
  lowerSalary,
  higherSalary,
  workHours,
  entreprise,
}) {
  const [technos, setTechnos] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/job_offers/tech`)
      .then((res) => {
        setTechnos(res.data);
      });
  }, []);

  return (
    <div className="bg-background py-5 px-6 rounded font-jost">
      <div className="flex flex-row items-center">
        <div>
          <img src={FakePP} alt="CompanyImage" className="pr-2" />
        </div>
        <div className="ml-4 grow">
          <h1 className=" text-lg font-semibold">{title}</h1>
          <p className="text-grey1">{entreprise}</p>
          <div className="flex">
            <img
              src={localisationIcon}
              alt="localisationIcon"
              className="pr-2"
            />
            <p>{location}</p>
          </div>
        </div>
        <div className="h-20">
          <img src={favIcon} alt="heartIcon" />
        </div>
      </div>
      <div className="mt-5">
        <p className=" text-grey2 text-sm">
          Depuis 1j - {workHours}h - {experience} - Aéronotique -{" "}
          <b>
            {lowerSalary} - {higherSalary}€
          </b>
        </p>
        <p className="mt-5">{description}</p>
      </div>
      <div className="flex flex-row gap-2 flex-wrap mt-5">
        {technos.map((techno) => (
          <Tags key={techno.id} techname={techno.techname} />
        ))}
      </div>
    </div>
  );
}

OfferDash.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  lowerSalary: PropTypes.number.isRequired,
  higherSalary: PropTypes.number.isRequired,
  workHours: PropTypes.number.isRequired,
  entreprise: PropTypes.string.isRequired,
};

export default OfferDash;
