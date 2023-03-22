import React from "react";

import { useCandidateContext } from "../contexts/CandidateContext";
import CandidateProfilePic from "../components/CandidateProfilePic";
import InfoCandidate from "../components/InfoCandidate";
import ToggleCandidate from "../components/ToggleCandidate";
import SkillsCandidate from "../components/SkillsCandidate";
import NetworksCandidate from "../components/NetworksCandidate";
import CvCandidate from "../components/CvCandidate";
import ValidationCandidate from "../components/ValidationCandidate";

function RegistrationCandidate() {
  const { formState } = useCandidateContext();

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

        <div className="md:bg-white rounded-[10px] p-5">
          <ToggleCandidate />
          <div className="flex flex-row justify-between items-center">
            <div className="ml-8 mt-4">
              <CandidateProfilePic />
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
        <p>firstname : {formState.firstname}</p>
        <p>lastname : {formState.lastname}</p>
        <p>email : {formState.email}</p>
        <p>phone : {formState.phone}</p>
        <p>language : {formState.language}</p>
        <p>location : {formState.location}</p>
        <p>password : {formState.password}</p>
        <p>confirm_password : {formState.confirm_password}</p>
        <p>picture : {formState.picture}</p>
        <p>cv : {formState.cv}</p>
        <p>age : {formState.age}</p>
        <p>gender : {formState.gender}</p>
        <p>picture : {formState.firstname}</p>
        <p>linkedin : {formState.linkedin}</p>
        <p>github : {formState.github}</p>
        <p>soft_skills : {formState.soft_skills}</p>
        <p>hard_skills : {formState.hard_skills}</p>
      </div>
    </div>
  );
}

export default RegistrationCandidate;
