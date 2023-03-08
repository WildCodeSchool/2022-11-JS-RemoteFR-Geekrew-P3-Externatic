// import React, { useState } from "react";
// import axios from "axios";
import circle from "../assets/images/circle.png";
import plusIcon from "../assets/Icons/plus-circle.svg";

// const backEndURL = import.meta.env.VITE_BACKEND_URL;

function ProfilePic() {
  // const [filesDisplay, setFilesDisplay] = useState([]);
  // const [files, setFiles] = useState([]);
  // const [name, setName] = useState("");

  // const handlePicture = (e) => {
  //   e.preventDefault;

  //   const formData = new FormData();

  //   console.log(formData);

  //   formData.append("file", files[0]);
  //   formData.append("name", name);

  //   axios.post(`${backEndURL}/companies`, formData, {
  //     headers: { "Content-Type": "multipart/form-data" },
  //   });
  // };

  return (
    <>
      <div className="relative flex flex-row justify-center h-28 w-28 items-center">
        <img src={circle} alt="" className="absolute" />
        <img src={plusIcon} alt="" className="absolute h-6 invert" />
        <img src="" alt="" className="absolute" />
      </div>
      {/* <div>
        {files.length && (
          <img className="h-28" src={URL.createObjectURL(files[0])} alt="" />
        )}
      </div>
      <input
        onChange={(e) => setName(e.target.value)}
        className="border-2"
        name="inputName"
        type="text"
      />
      <input
        onChange={(e) => setFiles(e.target.files)}
        name="inputFile"
        type="file"
      /> */}
    </>
  );
}

export default ProfilePic;
