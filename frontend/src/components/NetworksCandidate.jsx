import React from "react";

function NetworksCandidate() {
  return (
    <div className="m-8 ">
      <h2 className="font-bold text-sm text-black  text-left font-medium mb-4">
        Mes réseaux
      </h2>
      <label
        htmlFor="base-input"
        className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
      >
        LinkedIn
      </label>
      <input
        type="text"
        id="base-input"
        className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <label
        htmlFor="base-input"
        className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
      >
        GitHub
      </label>
      <input
        type="text"
        id="base-input"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}

export default NetworksCandidate;
