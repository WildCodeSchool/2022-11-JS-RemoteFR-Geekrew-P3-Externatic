import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import save from "../assets/Icons/save.svg";

function ButtonSaveOffer({ handleSubmit }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        type="button"
        onClick={handleSubmit}
        className="py-3 rounded-full bg-main font-semibold text-white text-md md:w-1/4 hover:scale-110"
      >
        <div className="flex items-center justify-center  md:ml-6  ml-3 mr-3">
          <img src={save} alt="logo save" className="mr-2" />
          Enregistrer l'annonce
        </div>
      </button>
      <Link to="/Dashboard">
        <button
          type="button"
          className="mt-2 mr-2 mb-2 text-sm font-medium text-main underline hover:no-underline hover:scale-110"
        >
          Annuler
        </button>
      </Link>
    </div>
  );
}
ButtonSaveOffer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default ButtonSaveOffer;
