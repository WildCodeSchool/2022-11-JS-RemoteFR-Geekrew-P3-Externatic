import React from "react";
import ValidationCompany from "../components/ValidationCompany";
import InfoCompany from "../components/InfoCompany";
import NetworksCompany from "../components/NetworksCompany";
import ProfilePic from "../components/ProfilePic";
import DisplayCompanyData from "../components/DisplayCompanyData";

function RegistrationCandidate() {
  return (
    <div className="md:bg-background">
      <div className="m-8 mx-auto w-11/12 md:w-2/3 lg:w-1/2">
        <div className="flex flex-col items-center">
          <h1 className="font-jost font-bold text-2xl text-left mx-8 my-5">
            Je m'inscrit comme
            <span className="italic text-main">
              {" "}
              Entre
              <span className="bg-underline bg-no-repeat bg-bottom">
                prise{" "}
              </span>
              <span className="italic text-black">! </span>
            </span>
          </h1>
        </div>
        <div className="md:bg-white p-5 rounded-[10px]">
          <div className="mb-6 ml-8 mt-6">
            <ProfilePic />
          </div>
          <InfoCompany />
          <NetworksCompany />
          <ValidationCompany />
          <DisplayCompanyData />
        </div>
      </div>
    </div>
  );
}

export default RegistrationCandidate;
