import { useState } from "react";
import searchIcon from "../assets/Icons/search.svg";

function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <div className="flex items-center justify-center my-8 mx-8">
      <div className="flex w-full">
        <input
          className="px-4 py-2 w-full rounded-tl-lg rounded-bl-lg focus:shadow focus:outline-none h-16"
          type="text"
          id="search-input"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Entrez une ville ..."
        />
        <button
          type="submit"
          className="flex items-center justify-center px-4 bg-white rounded-tr-lg rounded-br-lg"
        >
          <img src={searchIcon} alt="searchIcon" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
