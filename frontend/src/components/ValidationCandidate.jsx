import React from "react";
import { useCandidateContext } from "../contexts/CandidateContext";

function ValidationCandidate() {
  const { dispatch } = useCandidateContext();

  const handleInput = (e) => {
    dispatch({
      type: "HANDLE_INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };
  return (
    <div className="m-8 flex flex-col md:flex-row-reverse md:gap-x-8">
      <button
        type="button"
        onChange={handleInput}
        className="py-2 px-12 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-main rounded-full border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-200 hover:scale-90"
      >
        Valider l'inscription
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

export default ValidationCandidate;
