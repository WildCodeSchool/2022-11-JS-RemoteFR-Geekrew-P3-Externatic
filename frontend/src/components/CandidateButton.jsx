import { useNavigate } from "react-router-dom";
import candidateButton from "../assets/images/candidate-button.png";

function CandidateButton() {
  const navigate = useNavigate();
  return (
    <div className="relative ml-8">
      <img src={candidateButton} alt="candidate button" className="w-full" />
      <button
        onClick={() => navigate("/Registration")}
        type="button"
        className="absolute font-jost font-xs text-white hover:text-main bottom-5 left-5 pt-10 pr-10 hover:shadow-md"
      >
        Candidat
      </button>
    </div>
  );
}

export default CandidateButton;
