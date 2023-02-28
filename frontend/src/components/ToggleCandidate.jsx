import React from "react";

function ToggleCandidate() {
  return (
    <div className="float-right">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="w-10 h-5 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-main" />
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Je recherche activement
        </span>
      </label>
    </div>
  );
}

export default ToggleCandidate;
