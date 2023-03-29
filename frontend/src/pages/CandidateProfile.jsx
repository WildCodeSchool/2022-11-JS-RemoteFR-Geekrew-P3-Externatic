import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { useCurrentUserContext } from "../contexts/CurrentUserContext";

import expressAPI from "../services/expressAPI";
import toastError from "../services/toastService";

import UploadCv from "../components/CandidateProfile/UploadCv";
import Contacts from "../components/CandidateProfile/Contacts";
import Skills from "../components/CandidateProfile/Skills";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import Profile from "../components/CandidateProfile/Profile";

function CandidateProfile() {
  const { roles, candidateId, setCandidateId } = useCurrentUserContext();
  const [candidate, setCandidate] = useState(undefined);
  const { userId } = useParams();

  useEffect(() => {
    expressAPI.get(`/candidates/${userId}`).then((res) => {
      setCandidate(res.data);
      setCandidateId(res.data.id);
    });
  }, []);

  const handleDeleteCandidacy = () => {
    expressAPI
      .delete(`/candidacies/${candidateId}`)
      .then(() => {
        toast.success("La candidature a bien été refusée", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch(() => toastError("La candidature n'a pas pu être refusée"));
  };

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
              <SecondaryButton handleClick={handleDeleteCandidacy}>
                Refuser la candidature
              </SecondaryButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CandidateProfile;
