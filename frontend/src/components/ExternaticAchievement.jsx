import Success from "./OneAchievement";
import hello from "../assets/images/externatic-hello.png";
import rocket from "../assets/images/externatic-fusee.png";
import hourglass from "../assets/images/externatic-sablier.png";

function ExternaticAchievement() {
  return (
    <div className="font-jost mx-8 mb-8 ">
      <h1 className="font-semibold text-xl text-left md:flex md:text-5xl justify-start">
        <span className="underline decoration-4 decoration-main">
          Notre réussite
        </span>{" "}
        &nbsp;repose sur :
      </h1>
      <div className="flex flex-col items-center md:flex-row md:justify-center md:items-center md:h-96">
        <p>
          <Success title="Notre proximité" src={hello} alt="Hello">
            L'expérience professionnelle est une chose. L'expérience de vie en
            est une autre. Alors nos consultants prennent le temps de faire
            connaissance avec chaque personne, pour comprendre le contexte, le
            parcours, les envies et les projets.
          </Success>
        </p>
        <p>
          <Success title="Notre performance" src={rocket} alt="Rocket">
            Notre challenge est de trouver l'équipe qui fonctionnera ensemble de
            manière professionnelle et personnelle, pour aller jusqu'au bout
            d'un projet commun. Notre responsabilité vis-à-vis des impacts de
            nos décisions et nos actions sur le long-terme correspondent
            également à notre politique RSE.
          </Success>
        </p>
        <p>
          <Success title="Notre durabilité" src={hourglass} alt="Hourglass">
            Notre réseau est une force et nous y travaillons sans relâche. Notre
            expérience nous permet d'identifier les vrais besoins d'une
            entreprise et de ceux qui la rejoignent.
          </Success>
        </p>
      </div>
    </div>
  );
}

export default ExternaticAchievement;
