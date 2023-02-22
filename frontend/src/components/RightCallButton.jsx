import { useNavigate } from "react-router-dom";
import companyButton from "../assets/images/company-button.png";

function RightCallButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate("/SignInCompany")}
        type="button"
        className="flex justify-end font-jost font-xs"
      >
        Je suis une entreprise
      </button>
      <img src={companyButton} alt="backcloud" className="" />
    </div>
  );
}

export default RightCallButton;
