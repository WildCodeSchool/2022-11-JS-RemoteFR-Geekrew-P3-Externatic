import SearchBar from "../components/SearchBar";
import OffersContainer from "../components/OffersContainer";
import AdvancedSearchButton from "../components/AdvancedSearchButton";
import FavoriteDash from "../components/FavoriteDash";

function Dashboard() {
  return (
    <div className="bg-background flex flex-col justify-center">
      <SearchBar />
      <AdvancedSearchButton />
      <OffersContainer />
      <FavoriteDash />
    </div>
  );
}

export default Dashboard;
