import UploadCv from "../components/CandidateProfile/UploadCv";
import Contacts from "../components/CandidateProfile/Contacts";
import Skills from "../components/CandidateProfile/Skills";
import MainButton from "../components/Buttons/MainButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import Profile from "../components/CandidateProfile/Profile";

function CandidateProfile() {
  return (
    <div className="bg-background flex flex-col justify-center font-jost md:flex-row">
      <div className="bg-white rounded py-5 px-6 flex flex-col mx-8 my-8">
        <Profile />
        <div className="md:flex gap-10">
          <UploadCv />
          <Contacts />
        </div>
        <Skills />
        <MainButton> Accepter la candidature </MainButton>
        <SecondaryButton> Refuser la candidature </SecondaryButton>
      </div>
    </div>
  );
}

export default CandidateProfile;
