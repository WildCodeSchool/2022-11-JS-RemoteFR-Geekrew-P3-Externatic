import PropTypes from "prop-types";
import OffersContainer from "./OffersContainer";

function CompanyDash({ jobOffers }) {
  return (
    <div>
      <div className="bg-white rounded my-4 p-4 flex flex-col justify-center items-center mx-8">
        <h1 className="font-jost font-semibold text-xl">Offres en cours</h1>
      </div>
      <div className="">
        <OffersContainer jobOffers={jobOffers} />
      </div>
    </div>
  );
}

CompanyDash.propTypes = {
  jobOffers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default CompanyDash;
