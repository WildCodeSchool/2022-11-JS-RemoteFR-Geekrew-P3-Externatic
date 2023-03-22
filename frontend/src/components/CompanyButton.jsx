import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/currentUserContext";

import companyButton from "../assets/images/company-button.png";

function CompanyButton() {
  const { setUserType } = useCurrentUserContext();
  const navigate = useNavigate();

  const handleCompanyRegistration = () => {
    navigate("/Registration");
    setUserType("Entreprise");
  };
  return (
    <div className="relative mr-8">
      <img src={companyButton} alt="company button" className="w-full" />
      <button
        onClick={() => handleCompanyRegistration()}
        type="button"
        className="absolute font-jost font-xs text-white hover:text-main bottom-5 right-5 pt-10 pl-10"
      >
        Entreprise
      </button>
    </div>
  );
}

export default CompanyButton;
