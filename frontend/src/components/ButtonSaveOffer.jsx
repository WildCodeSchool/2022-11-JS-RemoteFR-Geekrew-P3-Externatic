import PropTypes from "prop-types";
import save from "../assets/Icons/save.svg";

function ButtonSaveOffer({ handleSubmit }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        type="button"
        onClick={handleSubmit}
        className="py-3 w-full rounded-full bg-main font-semibold text-white text-sm mb-6 md:w-1/4 hover:scale-110"
      >
        <div className="flex items-center w-full ml-5">
          Enregistrer l'annonce
          <img src={save} alt="logo save" className="ml-2" />
        </div>
      </button>
      <button
        type="button"
        className="mr-2 mb-2 text-sm font-medium text-main underline hover:no-underline hover:scale-110"
      >
        Annuler
      </button>
    </div>
  );
}
ButtonSaveOffer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default ButtonSaveOffer;
