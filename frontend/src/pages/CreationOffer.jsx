import CompanyJobDescription from "../components/CompanyJobDescription";
import CompanyDescription from "../components/CompanyDescription";
import ButtonSaveOffer from "../components/ButtonSaveOffer";

function CreationOffre() {
  return (
    <div className="bg-background  ">
      <div className="m-10 flex flex-col ">
        <CompanyDescription />
        <CompanyJobDescription />
        <ButtonSaveOffer />
      </div>
    </div>
  );
}

export default CreationOffre;
