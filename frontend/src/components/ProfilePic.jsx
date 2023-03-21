/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useCandidateContext } from "../contexts/CandidateContext";
import circle from "../assets/images/circle.png";
import plusIcon from "../assets/Icons/plus-circle.svg";
import PictureDisplay from "./PictureDisplay";

function ProfilePic() {
  const { dispatch } = useCandidateContext();
  const [filesDisplay, setFilesDisplay] = useState([]);

  const handleInput = (e) => {
    dispatch({
      type: "HANDLE_INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };
  return (
    <div>
      <PictureDisplay />
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
        <img src={plusIcon} alt="" className="absolute h-6 invert" />
      </label>
    </div>
  );
}

export default ProfilePic;
