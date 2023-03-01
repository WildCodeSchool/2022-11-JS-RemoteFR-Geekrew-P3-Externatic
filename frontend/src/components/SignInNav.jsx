import { useUserContext } from "../contexts/UserContext";

function SignInNav() {
  const { user, setUser } = useUserContext();
  const activeClass = "underline decoration-2 decoration-main";
  const isCandidate = user === "Candidat";

  return (
    <div className="bg-grey4 h-20 font-jost font-semibold flex items-center justify-around md:text-xl">
      <button
        onClick={() => setUser("Candidat")}
        type="button"
        className={`hover:underline hover:decoration-2 hover:decoration-main ${
          isCandidate ? activeClass : ""
        }`}
      >
        Candidat
      </button>
      <button
        onClick={() => setUser("Entreprise")}
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
