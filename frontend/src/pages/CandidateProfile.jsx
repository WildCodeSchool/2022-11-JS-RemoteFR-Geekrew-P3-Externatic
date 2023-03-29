import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { useCurrentUserContext } from "../contexts/CurrentUserContext";

import expressAPI from "../services/expressAPI";

import UploadCv from "../components/CandidateProfile/UploadCv";
import Contacts from "../components/CandidateProfile/Contacts";
import Skills from "../components/CandidateProfile/Skills";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import Profile from "../components/CandidateProfile/Profile";

function CandidateProfile() {
  const { roles } = useCurrentUserContext();
  const [candidate, setCandidate] = useState(undefined);
  const { userId } = useParams();

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
            picture={candidate.picture}
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
          {roles.includes("company") && (
            <div className="md:flex md:items-center md:flex-row-reverse md:gap-4">
              <SecondaryButton> Refuser la candidature </SecondaryButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CandidateProfile;
