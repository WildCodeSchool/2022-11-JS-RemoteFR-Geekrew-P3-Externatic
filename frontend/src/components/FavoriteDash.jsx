import OffersFav from "./OffersFav";

function FavoriteDash() {
  return (
    <div className="mx-8 mb-8">
      <h1 className="font-jost font-semibold text-xl my-5">
        Vos annonces favorites
      </h1>
      <div className="bg-white rounded p-4 flex flex-col gap-4">
        <OffersFav />
      </div>
    </div>
  );
}

export default FavoriteDash;
