import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import localisationIcon from "../assets/Icons/map-pin.svg";
import FakePP from "../assets/images/Fake-PP.png";
import favIcon from "../assets/Icons/heart.svg";
import Tags from "./Tags";

function OfferDash({
  jobId,
  title,
  description,
  location,
  experience,
  lowerSalary,
  higherSalary,
  workHours,
  postDate,
  entreprise,
  field,
  technologies,
}) {
  return (
    <div className="bg-background py-5 px-6 rounded font-jost">
      <Link to={`/OfferDetails/${jobId}`}>
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
            Depuis {postDate}j - {workHours}h - {experience} - {field} -{" "}
            <b>
              {lowerSalary} - {higherSalary}€
            </b>
          </p>
          <p className="mt-5">{description}</p>
        </div>
        <div className="flex flex-row gap-2 flex-wrap mt-5">
          {technologies.split(",").map((technologie) => (
            <Tags key={`${jobId}-${technologie}`} name={technologie} />
          ))}
        </div>
      </Link>
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
  postDate: PropTypes.number,
  entreprise: PropTypes.string.isRequired,
  field: PropTypes.string,
  technologies: PropTypes.string.isRequired,
  jobId: PropTypes.number.isRequired,
};

OfferDash.defaultProps = {
  field: "",
  postDate: 0,
};

export default OfferDash;
