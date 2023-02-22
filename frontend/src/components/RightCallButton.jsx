import { useNavigate } from "react-router-dom";
import companyButton from "../assets/images/company-button.png";

function RightCallButton() {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <img src={companyButton} alt="company button" className="w-full" />
      <button
        onClick={() => navigate("/SignInCompany")}
        type="button"
        className="absolute font-jost font-xs text-white hover:text-main bottom-5 right-5 pt-10 pl-10"
      >
        Entreprise
      </button>
    </div>
  );
}

export default RightCallButton;
