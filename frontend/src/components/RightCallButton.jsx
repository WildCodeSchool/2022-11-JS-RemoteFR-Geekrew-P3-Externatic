import { useNavigate } from "react-router-dom";

function RightCallButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate("/SignInCompany")}
        type="button"
        className=""
      >
        Je suis une entreprise
      </button>
    </div>
  );
}

export default RightCallButton;
