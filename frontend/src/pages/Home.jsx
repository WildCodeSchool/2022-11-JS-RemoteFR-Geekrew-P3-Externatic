import ExternaticAchievement from "../components/ExternaticAchievement";
import RecruitmentSteps from "../components/RecruitmentSteps";
import CandidateButton from "../components/CandidateButton";
import CompanyButton from "../components/CompanyButton";
import ContainerSlider from "../components/ContainerSlider";

function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center h-32 md:h-32">
        <h1 className="font-jost font-extrabold text-2xl text-left mx-8 my-5 md:text-5xl">
          Nous cassons les codes du recrutement
          <span className="italic text-main">
            {" "}
            infor
            <span className="bg-underline bg-no-repeat bg-bottom">
              matique{" "}
            </span>
          </span>
        </h1>
      </div>
      <div className="flex justify-between md:flex md:justify-center md: items-center font-extrabold mb-20">
        <CandidateButton />
        <CompanyButton />
      </div>
      <div className="md:flex md:items-center md:w-full">
        <ContainerSlider />
      </div>
      <div className="md:w-full">
        <RecruitmentSteps />
      </div>
      <div className="flex justify-start">
        <ExternaticAchievement />
      </div>
    </div>
  );
}

export default Home;
