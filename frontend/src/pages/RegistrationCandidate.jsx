import React from "react";

import ProfilePic from "../components/ProfilePic";
import InfoCandidate from "../components/InfoCandidate";
import ToggleCandidate from "../components/ToggleCandidate";
import SkillsCandidate from "../components/SkillsCandidate";
import NetworksCandidate from "../components/NetworksCandidate";
import CvCandidate from "../components/CvCandidate";
import ValidationCandidate from "../components/ValidationCandidate";
import CandidateContextProvider from "../contexts/CandidateContext";

function RegistrationCandidate() {
  return (
    <div className="md:bg-background">
      <div className="m-8 mx-auto w-11/12 md:w-2/3 lg:w-1/2">
        <div className="flex flex-col items-center">
          <h1 className="font-jost font-bold text-2xl text-left mx-8 my-5">
            Je m'inscrit comme
            <span className="italic text-main">
              {" "}
              Can
              <span className="bg-underline bg-no-repeat bg-bottom">
                didat{" "}
              </span>
              <span className="italic text-black">! </span>
            </span>
          </h1>
        </div>
        <CandidateContextProvider>
          <div className="md:bg-white rounded-[10px] p-5">
            <ToggleCandidate />
            <div className="flex flex-row justify-between items-center">
              <div className="ml-8 mt-4">
                <ProfilePic />
              </div>
            </div>
            <InfoCandidate />
            <SkillsCandidate />
            <div className="flex flex-col justify-start w-full md:grid md:grid-cols-2">
              <CvCandidate />
              <NetworksCandidate />
            </div>
            <ValidationCandidate />
          </div>
        </CandidateContextProvider>
      </div>
    </div>
  );
}

export default RegistrationCandidate;
