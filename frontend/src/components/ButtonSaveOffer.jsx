import save from "../assets/Icons/save.svg";

function ButtonSaveOffer() {
  return (
    <div className="w-full md:w-1/2 flex flex-col lg:w-1/2">
      <button
        type="button"
        // onChange={handleInput}
        className="py-2 px-20 text-sm font-medium text-white  bg-main rounded-full border hover:scale-110"
      >
        <div className="flex items-center w-full">
          Enregistrer l'annonce
          <img src={save} alt="logo save" className="text-white ml-2" />
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

export default ButtonSaveOffer;
