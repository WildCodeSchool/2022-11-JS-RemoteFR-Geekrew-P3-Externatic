import PropTypes from "prop-types";

import telIcon from "../../assets/Icons/phone.svg";
import githubLogo from "../../assets/Icons/github.svg";
import mailIcon from "../../assets/Icons/mail.svg";
import linkedinLogo from "../../assets/Icons/linkedin_main.svg";

function Contacts({ phone, github, mail, linkedin }) {
  return (
    <div className="md:w-1/2">
      <h2 className="mt-6 font-semibold">Contacts</h2>
      <div className="flex flex-col sm:flex-row sm:flex-wrap">
        <div className="flex flex-row items-center mt-3">
          <div className="flex justify-center p-2 w-fit rounded-full border-2 border-main bg-white ">
            <img src={telIcon} alt="Phone icon" />
          </div>
          <p className="pl-3 pr-5 text-sm">{phone}</p>
        </div>
        <div className="flex flex-row items-center mt-3">
          <div className="flex justify-center p-2 w-fit rounded-full border-2 border-main bg-white">
            <img src={githubLogo} alt="Phone icon" />
          </div>
          <p className="pl-3 pr-5 text-sm">{github}</p>
        </div>
        <div className="flex flex-row items-center mt-3">
          <div className="flex justify-center p-2 w-fit rounded-full border-2 border-main bg-white">
            <img src={mailIcon} alt="Phone icon" />
          </div>
          <p className="pl-3 pr-5 text-sm">{mail}</p>
        </div>
        <div className="flex flex-row items-center mt-3">
          <div className="flex justify-center p-2 w-fit rounded-full border-2 border-main bg-white">
            <img src={linkedinLogo} alt="Phone icon" />
          </div>
          <p className="pl-3 pr-5 text-sm">{linkedin}</p>
        </div>
      </div>
    </div>
  );
}

Contacts.propTypes = {
  phone: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default Contacts;
