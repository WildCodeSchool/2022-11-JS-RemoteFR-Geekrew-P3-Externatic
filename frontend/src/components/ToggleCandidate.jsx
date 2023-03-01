import React from "react";

function ToggleCandidate() {
  return (
    <div className="mr-5">
      <div className="flex flex-row-reverse">
        <label className="relative cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-10 h-5 bg-grey2 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full  after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-main" />
        </label>
      </div>
      <div className="flex flex-row-reverse">
        <span className="text-sm text-grey2">Je recherche activement</span>
      </div>
    </div>
  );
}

export default ToggleCandidate;
