import { useState, useEffect } from "react";

import { useCurrentUserContext } from "../contexts/CurrentUserContext";

import expressAPI from "../services/expressAPI";

import UploadCv from "../components/CandidateProfile/UploadCv";
import Contacts from "../components/CandidateProfile/Contacts";
import Skills from "../components/CandidateProfile/Skills";
import MainButton from "../components/Buttons/MainButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import Profile from "../components/CandidateProfile/Profile";

function CandidateProfile() {
  const [candidate, setCandidate] = useState(undefined);
  const { userId } = useCurrentUserContext();

  useEffect(() => {
    expressAPI.get(`/candidates/${userId}`).then((res) => {
      setCandidate(res.data);
    });
  }, []);

  return (
    <div className="bg-background flex flex-col justify-center font-jost md:flex-row">
      {candidate && (
        <div className="bg-white rounded py-5 px-6 flex flex-col mx-8 my-8 md:w-[70%]">
          <Profile
            lastname={candidate.lastname}
            firstname={candidate.firstname}
            location={candidate.location}
          />
          <div className="md:flex">
            <UploadCv url={candidate.cv} />
            <Contacts
              phone={candidate.phone}
              github={candidate.github}
              mail={candidate.mail}
              linkedin={candidate.linkedin}
            />
          </div>
          <Skills
            softSkills={candidate.soft_skills}
            hardSkills={candidate.techname}
          />
          <div className="md:flex md:items-center md:flex-row-reverse md:gap-4">
            <MainButton> Accepter la candidature </MainButton>
            <SecondaryButton> Refuser la candidature </SecondaryButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default CandidateProfile;
