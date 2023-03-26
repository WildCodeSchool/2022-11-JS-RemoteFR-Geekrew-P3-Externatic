/* eslint-disable no-restricted-syntax */
import { useState } from "react";
import expressAPI from "../services/expressAPI";
import plus from "../assets/Icons/plus-circle.svg";

function CandidateProfilePic() {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("name", name);

    expressAPI
      .put(`/users/5/picture`, formData, {
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
      <div className="">
        <form onSubmit={handleForm}>
          <div className="border-main rounded-lg">
            <label className="block mb-6 relative ">
              <input
                onChange={(e) => setFiles(e.target.files)}
                required
                name="photo"
                type="file"
                className="opacity-0 absolute z-10 w-full h-full cursor-pointer"
              />
              {files.length && (
                <img
                  src={URL.createObjectURL(files[0])}
                  alt=""
                  className="w-20 h-20 rounded-full"
                />
              )}
              <div className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer absolute bottom-5 left-4 z-5 align">
                <img src={plus} alt="" className="pointer-events-none" />
              </div>
            </label>
          </div>

          <div className="flex flex-col">
            <label className="mt-3 mb-2 text-grey2" htmlFor="lastname">
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

export default CandidateProfilePic;
