import React from "react";

import { useCompanyContext } from "../contexts/CompanyContext";

function NetworksCompany() {
  const { dispatch } = useCompanyContext();

  const handleInput = (e) => {
    dispatch({
      type: "HANDLE_INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <div className="m-8 md:grid md:grid-cols-2 md:gap-x-4">
      <h2 className="font-bold text-sm text-black  text-left font-medium mb-4 md:col-span-2">
        Nos réseaux
      </h2>
      <div>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
        >
          LinkedIn
        </label>
        <input
          type="text"
          id="base-input"
          name="linkedin"
          onChange={handleInput}
          className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
}

export default NetworksCompany;
