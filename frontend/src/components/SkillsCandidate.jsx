import React from "react";

function SkillsCandidate() {
  return (
    <div className="m-8 ">
      <h2 className="text-sm text-black text-left font-medium mb-4">
        Mes compétences
      </h2>
      <div className="flex flex-col justify-start w-full md:grid md:grid-cols-2">
        <div className="md:mr-2">
          <label
            htmlFor="hard skills"
            className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
          >
            Hard Skills
          </label>
          <select
            id="hard skills"
            className="bg-gray-50 border border-gray-300 text-grey1 text-sm rounded focus:ring-black focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  mb-5"
          >
            <option>{}</option>
            <option>Javascript</option>
            <option>Java</option>
            <option>PHP</option>
            <option>React</option>
          </select>
        </div>
        <div className="w-full">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
          >
            Soft Skills
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-grey3 text-sm rounded focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
          />
        </div>
      </div>
    </div>
  );
}

export default SkillsCandidate;
