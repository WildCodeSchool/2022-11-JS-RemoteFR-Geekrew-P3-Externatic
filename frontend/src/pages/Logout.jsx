import SecondaryButton from "../components/Buttons/SecondaryButton";

import thank from "../assets/images/thank.svg";

function Logout() {
  return (
    <div className="flex flex-col items-center mt-5">
      <h1 className="font-jost text-2xl p-5">Vous êtes bien déconnecté !</h1>
      <SecondaryButton>Revenir à l'accueil</SecondaryButton>
      <img src={thank} alt="thank you" className="w-60 h-60 mt-16" />
    </div>
  );
}

export default Logout;
