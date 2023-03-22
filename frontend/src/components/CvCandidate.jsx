import React, { useState } from "react";
import expressAPI from "../services/expressAPI";

function CvCandidate() {
  const [files, setFiles] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", files[0]);

    expressAPI
      .post(`/candidate`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then("Fichier envoyé avec succès");
  };
  return (
    <div className="m-8 ">
      <h2 className="font-bold text-sm text-black  text-left font-medium mb-4">
        Mon CV
      </h2>
      <form onSubmit={handleForm}>
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
        >
          Télécharger
        </label>
        <input
          onChange={(e) => setFiles(e.target.files)}
          type="file"
          name="cv"
          accept=".pdf"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Cliquez ici pour télécharger"
          required
        />
      </form>
    </div>
  );
}

export default CvCandidate;
