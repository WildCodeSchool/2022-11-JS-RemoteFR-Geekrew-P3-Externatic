import Step from "./Step";

function AllSteps() {
  const leftStepClasses = "bg-left text-left py-4";
  const rightStepClasses = "bg-right text-right py-5";

  return (
    <div className="font-jost mb-10">
      <h1 className="font-semibold text-xl text-left">
        <span className="underline decoration-4 decoration-main">
          Les étapes
        </span>{" "}
        d'un recrutement
      </h1>
      <div className="pt-5 text-xs font-medium">
        <Step tailwindClasses={`bg-step1 ${leftStepClasses}`}>
          1. Inscrivez-vous et retrouvez vos <br /> offres d'emploi
          personnalisées
        </Step>
        <Step tailwindClasses={`bg-step2 ${rightStepClasses}`}>
          2. Accédez au profil de votre <br />
          consultant pour le contacter !
        </Step>
        <Step tailwindClasses={`bg-step3 ${leftStepClasses}`}>
          3. Suivez votre processus de <br /> recrutement en direct !
        </Step>
        <Step tailwindClasses={`bg-step4 ${rightStepClasses}`}>
          4. Et enfin, l'entreprise de <br />
          votre choix vous contactera !
        </Step>
      </div>
    </div>
  );
}

export default AllSteps;
