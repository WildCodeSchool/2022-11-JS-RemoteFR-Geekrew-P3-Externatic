/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useCandidateContext } from "../contexts/CandidateContext";
import circle from "../assets/images/circle.png";
import plusIcon from "../assets/Icons/plus-circle.svg";
import PictureDisplay from "./PictureDisplay";
import expressAPI from "../services/expressAPI";

function CandidateProfilePic() {
  const { dispatch } = useCandidateContext();
  // const [filesDisplay, setFilesDisplay] = useState([]);
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");

  const handleInput = (e) => {
    dispatch({
      type: "HANDLE_INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };
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
    <div>
      <PictureDisplay />
      <form onSubmit={handleForm} className="">
        <input
          type="file"
          name="picture"
          id="base-input"
          onChange={handleInput}
          className="relative z-10 opacity-0 w-0 h-0 overflow-hidden"
        />
        <label
          htmlFor="base-input"
          className="relative flex flex-row justify-center h-28 w-28 items-center  rounded-full cursor-pointer"
        >
          <img src={circle} alt="" className="absolute" />
          {files.length && <img src={URL.createObjectURL(files[0])} alt="" />}
          <img src={plusIcon} alt="" className="absolute h-6 invert" />
        </label>
      </form>
    </div>
  );
}

export default CandidateProfilePic;
