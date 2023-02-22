import { useNavigate } from "react-router-dom";
import candidateButton from "../assets/images/candidate-button.png";

function LeftCallButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate("/SignInCandidate")}
        type="button"
        className="flex justify-start font-jost font-xs"
      >
        Je suis un candidat
      </button>
      <img src={candidateButton} alt="backcloud" className="" />
    </div>
  );
}

export default LeftCallButton;
