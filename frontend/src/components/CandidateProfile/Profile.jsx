import PropTypes from "prop-types";

import FakePP from "../../assets/images/Fake-PP.png";
import localisationIcon from "../../assets/Icons/map-pin.svg";

function Profile({ firstname, lastname, location }) {
  return (
    <div className="flex flex-row items-center">
      <div>
        <img src={FakePP} alt="CompanyImage" className="pr-2" />
      </div>
      <div className="ml-4 grow">
        <h1 className=" text-lg font-semibold">
          {firstname} {lastname}
        </h1>
        <p className="text-grey1">Développeur web junior</p>
        <div className="flex mt-2">
          <img src={localisationIcon} alt="localisationIcon" className="pr-2" />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;
