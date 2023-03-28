import { useCurrentUserContext } from "../contexts/currentUserContext";

function SignInNav() {
  const { userType, setUserType } = useCurrentUserContext();
  const activeClass = "underline decoration-2 decoration-main";
  const isCandidate = userType === "Candidat";

  return (
    <div className="bg-grey4 h-20 font-jost font-semibold flex items-center justify-around md:text-xl">
      <button
        onClick={() => setUserType("Candidat")}
        type="button"
        className={`hover:underline hover:decoration-2 hover:decoration-main ${
          isCandidate ? activeClass : ""
        }`}
      >
        Candidat
      </button>
      <button
        onClick={() => setUserType("Entreprise")}
        type="button"
        className={`hover:underline hover:decoration-2 hover:decoration-main ${
          !isCandidate ? activeClass : ""
        }`}
      >
        Entreprise
      </button>
    </div>
  );
}

export default SignInNav;
