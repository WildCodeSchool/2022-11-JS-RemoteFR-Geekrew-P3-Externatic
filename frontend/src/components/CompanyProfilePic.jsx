/* eslint-disable no-restricted-syntax */
import { useState } from "react";
import expressAPI from "../services/expressAPI";

function CompanyProfilePic() {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("name", name);

    expressAPI
      .put(`/companies/2/picture`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        console.log("Photo uploaded!");
      })
      .catch((error) => {
        console.error("Error uploading photo:", error);
      });
  };
  return (
    <div className="float-left w-full md:w-96 md:max-w-full mx-auto mb-5">
      <div className="p-6 border border-gray-300 sm:rounded-md">
        <form onSubmit={handleForm}>
          <div className="float-left relative flex flex-row justify-center h-28 w-28 items-center  rounded-full cursor-pointer">
            {files.length && <img src={URL.createObjectURL(files[0])} alt="" />}
          </div>
          <label className="block mb-6">
            <input
              onChange={(e) => setFiles(e.target.files)}
              required
              name="photo"
              type="file"
              className="
            block
            w-full
            mt-1
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
            />
          </label>
          <div className="flex flex-col">
            <label className="mb-2 text-grey2" htmlFor="lastname">
              Nom <span className="text-main-dark">*</span>
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-grey1 rounded mb-5 leading-9"
              id="lastname"
              name="lastname"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="mr-2 mb-2 text-sm font-medium text-main underline hover:no-underline"
            >
              Modifier photo de profil
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompanyProfilePic;
