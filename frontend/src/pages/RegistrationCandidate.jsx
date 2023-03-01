import React from "react";

import ProfilePic from "@components/ProfilePic";
import InfoFormCandidate from "@components/InfoFormCandidate";
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
      <div className="flex flex-row justify-between items-center">
        <div className="ml-8 mt-4">
          <ProfilePic />
        </div>
        <ToggleCandidate />
      </div>
      <InfoFormCandidate />
      <SkillsCandidate />
      <CvCandiadte />
      <NetworksCandidate />
      <ValidationCandidate />
    </div>
  );
}

export default RegistrationCandidate;
