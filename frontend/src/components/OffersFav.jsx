import FakePP from "../assets/images/Fake-PP.png";
import localisationIcon from "../assets/Icons/map-pin.svg";

function OffersFav() {
  return (
    <div className="bg-background flex flex-row gap-3 py-5 px-6 rounded font-jost">
      <img src={FakePP} alt="CompanyImage" className="h-12 w-12" />
      <div className="grow">
        <h1 className="font-semibold">Titre du post</h1>
        <p className="text-grey1">Entreprise</p>
      </div>
      <div className="flex items-center">
        <img src={localisationIcon} alt="localisationIcon" className="pr-2" />
        <p className="text-sm">Localisation</p>
      </div>
    </div>
  );
}

export default OffersFav;
