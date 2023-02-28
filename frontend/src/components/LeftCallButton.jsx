import { useNavigate } from "react-router-dom";

function LeftCallButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate("/SignInCandidate")}
        type="button"
        className=""
      >
        Je suis un candidat
      </button>
    </div>
  );
}

export default LeftCallButton;
