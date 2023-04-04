import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import localisationIcon from "../../assets/Icons/map-pin.svg";
import MainButton from "../Buttons/MainButton";

function CandidateCard({ firstname, lastname, location, userId, picture }) {
  const navigate = useNavigate();

  const navigateToCandidate = (e) => {
    e.preventDefault();
    navigate(`/Candidate-Profile/${userId}`);
  };
  return (
    <div className="bg-white rounded py-4 my-4">
      <div className="flex flex-row ">
        <div className=" px-4">
          <img
            src={picture}
            alt="profile"
            className="rounded-full h-16 w-16 "
          />
        </div>
        <div className="ml-4 flex-row">
          <h1 className=" text-lg font-semibold">
            {firstname} {lastname}
          </h1>
          <p className="text-grey1">Développeur web junior</p>
          <div className="flex mt-2">
            <img
              src={localisationIcon}
              alt="localisationIcon"
              className="pr-2"
            />
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="mx-4 mt-5 md:flex md:justify-center">
        <MainButton handleClick={navigateToCandidate}>
          Consulter le profil
        </MainButton>
      </div>
    </div>
  );
}

CandidateCard.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
};

export default CandidateCard;
