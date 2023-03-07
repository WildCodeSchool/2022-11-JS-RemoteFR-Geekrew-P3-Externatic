import localisationIcon from "../assets/Icons/map-pin.svg";
import FakePP from "../assets/images/Fake-PP.png";
import favIcon from "../assets/Icons/heart.svg";
import Tags from "./Tags";

function OfferDash() {
  return (
    <div className="bg-background py-5 px-6 rounded font-jost">
      <div className="flex flex-row items-center">
        <div>
          <img src={FakePP} alt="CompanyImage" className="pr-2" />
        </div>
        <div className="ml-4 grow">
          <h1 className=" text-lg font-semibold">Titre du poste</h1>
          <p className="text-grey1">Entreprise</p>
          <div className="flex">
            <img
              src={localisationIcon}
              alt="localisationIcon"
              className="pr-2"
            />
            <p>Localisation</p>
          </div>
        </div>
        <div className="h-20">
          <img src={favIcon} alt="heartIcon" />
        </div>
      </div>
      <div className="mt-5">
        <p className=" text-grey2 text-sm">
          Depuis 1j - Temps complet - Junior - Aéronotique - <b>25 - 30 000€</b>
        </p>
        <p className="mt-5">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. “
        </p>
      </div>
      <div className="flex flex-row gap-2 flex-wrap mt-5">
        <Tags />
        <Tags />
        <Tags />
      </div>
    </div>
  );
}

export default OfferDash;
