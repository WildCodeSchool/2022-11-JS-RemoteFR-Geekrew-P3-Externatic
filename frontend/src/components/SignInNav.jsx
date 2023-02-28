function SignInNav() {
  return (
    <div className="bg-grey4 h-20 font-jost font-semibold flex items-center justify-around md:text-xl">
      <button
        type="button"
        className="hover:underline hover:decoration-2 hover:decoration-main"
      >
        Candidat
      </button>
      <button
        type="button"
        className="hover:underline hover:decoration-2 hover:decoration-main"
      >
        Entreprise
      </button>
    </div>
  );
}

export default SignInNav;
