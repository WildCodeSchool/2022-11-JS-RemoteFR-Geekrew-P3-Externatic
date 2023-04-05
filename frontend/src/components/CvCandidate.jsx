import React from "react";
import PropTypes from "prop-types";

function CvCandidate({ setCvFile }) {
  const onChange = (e) => {
    setCvFile([e.target.files[0]]);
  };

  return (
    <div className="m-8 mr-0">
      <h2 className="text-sm text-black  text-left font-medium mb-4">Mon CV</h2>
      <form>
        <label
          htmlFor="base-input"
          className="block text-sm text-left font-medium text-grey2"
        >
          <span className="mb-2">Télécharger</span>
          <input
            onChange={onChange}
            type="file"
            name="cv"
            accept=".pdf"
            id="base-input"
            className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full px-3 leading-9"
            placeholder="Cliquez ici pour télécharger"
            required
          />
        </label>
      </form>
    </div>
  );
}

CvCandidate.propTypes = {
  setCvFile: PropTypes.func.isRequired,
};

export default CvCandidate;
