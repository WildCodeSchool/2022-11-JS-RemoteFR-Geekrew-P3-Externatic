import FakePP from "../../assets/images/Fake-PP.png";
import localisationIcon from "../../assets/Icons/map-pin.svg";

function Profile() {
  return (
    <div className="flex flex-row items-center">
      <div>
        <img src={FakePP} alt="CompanyImage" className="pr-2" />
      </div>
      <div className="ml-4 grow">
        <h1 className=" text-lg font-semibold">Pierre Michel</h1>
        <p className="text-grey1">Développeur web junior</p>
        <div className="flex mt-2">
          <img src={localisationIcon} alt="localisationIcon" className="pr-2" />
          <p>Paris</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
