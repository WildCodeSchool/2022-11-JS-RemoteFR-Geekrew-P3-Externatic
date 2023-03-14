import { useState, useEffect } from "react";

import expressAPI from "../services/expressAPI";

import UploadCv from "../components/CandidateProfile/UploadCv";
import Contacts from "../components/CandidateProfile/Contacts";
import Skills from "../components/CandidateProfile/Skills";
import MainButton from "../components/Buttons/MainButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import Profile from "../components/CandidateProfile/Profile";

function CandidateProfile() {
  const [candidate, setCandidate] = useState(undefined);
  const id = 4;

  useEffect(() => {
    expressAPI.get(`/candidates/${id}`).then((res) => {
      setCandidate(res.data);
    });
  }, []);

  return (
    <div className="bg-background flex flex-col justify-center font-jost md:flex-row">
      {candidate && (
        <div className="bg-white rounded py-5 px-6 flex flex-col mx-8 my-8">
          <Profile
            lastname={candidate.lastname}
            firstname={candidate.firstname}
            location={candidate.location}
          />
          <div className="md:flex gap-10">
            <UploadCv url={candidate.cv} />
            <Contacts
              phone={candidate.phone}
              github={candidate.github}
              mail={candidate.mail}
              linkedin={candidate.linkedin}
            />
          </div>
          <Skills softSkills={candidate.soft_skills} />
          <MainButton> Accepter la candidature </MainButton>
          <SecondaryButton> Refuser la candidature </SecondaryButton>
        </div>
      )}
    </div>
  );
}

export default CandidateProfile;
