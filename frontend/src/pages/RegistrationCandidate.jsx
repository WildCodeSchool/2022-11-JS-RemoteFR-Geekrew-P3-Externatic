import React from "react";
import ToggleCandidate from "../components/ToggleCandidate";
import SkillsCandidate from "../components/SkillsCandidate";
import NetworksCandidate from "../components/NetworksCandidate";
import CvCandiadte from "../components/CvCandidate";
import ValidationCandidate from "../components/ValidationCandidate";

function RegistrationCandidate() {
  return (
    <div className="m-8 mx-auto w-11/12 md:w-2/3 lg:w-1/2">
      <div className="flex flex-col items-center">
        <h1 className="font-jost font-bold text-2xl text-left mx-8 my-5">
          Je m'inscrit comme
          <span className="italic text-main">
            {" "}
            Can
            <span className="bg-underline bg-no-repeat bg-bottom">didat </span>
            <span className="italic text-black">! </span>
          </span>
        </h1>
      </div>
      <ToggleCandidate />
      <SkillsCandidate />
      <CvCandiadte />
      <NetworksCandidate />
      <ValidationCandidate />
    </div>
  );
}

export default RegistrationCandidate;
