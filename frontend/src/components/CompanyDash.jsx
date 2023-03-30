import OffersContainer from "./OffersContainer";

function CompanyDash() {
  return (
    <div className="mb-8">
      <div className="bg-white rounded my-4 p-4 flex flex-col justify-center items-center mx-8">
        <h1 className="font-jost font-semibold text-xl">Offres en cours</h1>
      </div>
      <div>
        <OffersContainer />
      </div>
    </div>
  );
}

export default CompanyDash;
