import React from "react";
import circle from "../assets/images/circle.png";
import plusIcon from "../assets/Icons/plus-circle.svg";

function ProfilePic() {
  return (
    <div className="relative flex flex-row justify-center ml-8 mt-4 h-28 w-28 items-center">
      <img src={circle} alt="" className="absolute" />
      <img src={plusIcon} alt="" className="absolute h-6 invert" />
      <img src="" alt="" className="absolute" />
    </div>
  );
}

export default ProfilePic;
