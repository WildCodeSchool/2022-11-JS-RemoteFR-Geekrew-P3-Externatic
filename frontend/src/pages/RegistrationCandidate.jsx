import React from "react";
import ToggleCandidate from "../components/ToggleCandidate";
import SkillsCandidate from "../components/SkillsCandidate";
import NetworksCandidate from "../components/NetworksCandidate";
import CvCandiadte from "../components/CvCandidate";

function RegistrationCandidate() {
  return (
    <div className="m-8">
      <div className="flex flex-col">
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
    </div>
  );
}

export default RegistrationCandidate;
