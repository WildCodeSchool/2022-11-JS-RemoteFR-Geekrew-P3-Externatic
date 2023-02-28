import React from "react";

function SkillsCandidate() {
  return (
    <div className="m-8 ">
      <h2 className="font-bold text-sm text-black  text-left font-medium mb-4">
        Mes compétences
      </h2>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
      >
        Hard Skills
      </label>
      <select
        id="hard skills"
        className="bg-gray-50 border border-gray-300 text-grey1 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  mb-5"
      >
        <option>{}</option>
        <option>Javascript</option>
        <option>Java</option>
        <option>PHP</option>
        <option>React</option>
      </select>
      <label
        htmlFor="base-input"
        className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
      >
        Soft Skills
      </label>
      <input
        type="text"
        id="base-input"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}

export default SkillsCandidate;
