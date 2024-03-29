import mobileStep1 from "../assets/images/mobileStep1.png";
import Step1 from "../assets/images/Step1.png";
import mobileStep2 from "../assets/images/mobileStep2.png";
import Step2 from "../assets/images/Step2.png";
import mobileStep3 from "../assets/images/mobileStep3.png";
import Step3 from "../assets/images/Step3.png";
import mobileStep4 from "../assets/images/mobileStep4.png";
import Step4 from "../assets/images/Step4.png";

function RecruitmentSteps() {
  return (
    <div className="font-jost mb-10 mx-8">
      <h1 className="font-semibold text-xl text-left md:text-5xl">
        <span className="underline decoration-4 decoration-main">
          Les étapes
        </span>{" "}
        d'un recrutement
      </h1>
      <div className="pt-5 text-xs md:text-xl font-medium flex flex-col items-center mt-5 md:mt-10">
        <div className="flex relative max-w-4xl mx-auto items-center md:ml-64">
          <img
            src={mobileStep1}
            className="block md:hidden"
            alt="step1 mobile"
          />
          <img
            src={Step1}
            className="hidden md:block md:float-left"
            alt="step1 desktop"
          />
          <p className="absolute m-5 md:m-20">
            {" "}
            1. Inscrivez-vous et retrouvez vos <br /> offres d'emploi
            personnalisées
          </p>
        </div>
        <div className="flex relative max-w-4xl mx-auto items-center md:mr-76">
          <img
            src={mobileStep2}
            className="block md:hidden"
            alt="step1 mobile"
          />
          <img src={Step2} className="hidden md:block" alt="step1 desktop" />
          <p className="absolute ml-24 md:ml-64">
            2. Accédez au profil de votre <br />
            consultant pour le contacter!
          </p>
        </div>
        <div className="flex relative max-w-4xl mx-auto items-center md:ml-64">
          <img
            src={mobileStep3}
            className="block md:hidden"
            alt="step1 mobile"
          />
          <img src={Step3} className="hidden md:block" alt="step1 desktop" />
          <p className="absolute m-5 md:m-20">
            3. Suivez votre processus de <br /> recrutement en direct !
          </p>
        </div>
        <div className="flex relative max-w-4xl ml-20 mt-1 items-end">
          <img
            src={mobileStep4}
            className="block md:hidden"
            alt="step1 mobile"
          />
          <img src={Step4} className="hidden md:block" alt="step1 desktop" />
          <p className="absolute m-4 md:m-16">
            4. Et enfin, l'entreprise de <br />
            votre choix vous contactera !
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecruitmentSteps;
