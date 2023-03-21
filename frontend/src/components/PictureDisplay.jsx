/* eslint-disable no-restricted-syntax */
import { useState } from "react";
import axios from "axios";

function PictureDisplay() {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("name", name);

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/users/picture`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        console.log("Photo uploaded!");
      });
  };

  return (
    <form onSubmit={handleForm} className="">
      <div className="float-left relative flex flex-row justify-center h-28 w-28 items-center  rounded-full cursor-pointer">
        {files.length && <img src={URL.createObjectURL(files[0])} alt="" />}
      </div>
      <div className="">
        <label htmlFor="inputName">Nom</label>
        <input
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          name="inputName"
          type="text"
        />
      </div>
      <div className="form-group mb-4">
        <br />
        <input
          onChange={(e) => setFiles(e.target.files)}
          className="form-control-file"
          name="inputFile"
          type="file"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Envoyer
      </button>
    </form>
  );
}

export default PictureDisplay;
