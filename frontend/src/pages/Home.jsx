import ExternaticAchievement from "../components/ExternaticAchievement";
import RecruitmentSteps from "../components/RecruitmentSteps";
import CandidateButton from "../components/CandidateButton";
import CompanyButton from "../components/CompanyButton";
import ContainerSlider from "../components/ContainerSlider";

function Home() {
  return (
    <div className="flex flex-col">
      <h1 className="font-jost font-extrabold text-2xl text-left">
        Nous cassons les codes du recrutement
        <span className="italic text-main">
          {" "}
          infor
          <span className="bg-underline bg-no-repeat bg-bottom">matique </span>
        </span>
      </h1>
      <div className="flex justify-between items-center font-extrabold h-32">
        <CandidateButton />
        <CompanyButton />
      </div>
      <ContainerSlider />
      <RecruitmentSteps />
      <ExternaticAchievement />
    </div>
  );
}

export default Home;
