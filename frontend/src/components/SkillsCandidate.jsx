import React, { useState, useEffect } from "react";
import expressAPI from "../services/expressAPI";
import chevronDown from "../assets/Icons/chevron-down.svg";
import chevronUp from "../assets/Icons/chevron-up.svg";
import { useCandidateContext } from "../contexts/CandidateContext";

function SkillsCandidate() {
  const { dispatch } = useCandidateContext();

  const [isOpen, setOpen] = useState(false);
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    expressAPI.get(`/technologies`).then((res) => {
      setTechnologies(res.data);
    });
  }, []);

  const [candidateHardSkills, setCandidateHardSkills] = useState([]);

  const handleHardSkills = (e) => {
    if (e.target.checked === true) {
      setCandidateHardSkills([...candidateHardSkills, e.target.name]);
    }
  };

  useEffect(() => {
    const hardSkillsForm = candidateHardSkills.join(", ");

    dispatch({
      type: "HANDLE_HARDSKILLS",
      payload: hardSkillsForm,
    });
  }, [candidateHardSkills]);

  return (
    <div className="m-8 ">
      <h2 className="text-sm text-black text-left font-medium mb-4">
        Mes compétences
      </h2>
      <div className="flex flex-col justify-start w-full md:grid md:grid-cols-2">
        <div className="flex flex-col justify-center md:mr-2 relative">
          <button
            className="flex text-sm text-black text-left font-medium mb-6"
            onClick={() => setOpen(!isOpen)}
            type="button"
          >
            Hard Skills
            {isOpen ? (
              <img src={chevronUp} alt="fermer" className="h-6 w-6 ml-6" />
            ) : (
              <img src={chevronDown} alt="ouvrir" className="h-6 w-6 ml-6" />
            )}
          </button>
          <div className="absolute z-10 top-12 bg-white">
            {technologies.map(
              (technology) =>
                isOpen && (
                  <div className="flex">
                    <input
                      id={technology.name}
                      name={technology.name}
                      type="checkbox"
                      onChange={handleHardSkills}
                    />
                    <label
                      className="ml-6 text-sm text-black text-left font-medium"
                      htmlFor={technology.name}
                    >
                      {technology.name}
                    </label>
                    <br />
                  </div>
                )
            )}
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm text-left font-medium text-grey2"
          >
            Soft Skills
          </label>
          <input
            type="text"
            id="base-input"
            name="soft_skills"
            className="bg-gray-50 border border-grey3 text-sm rounded focus:ring-main focus:border-main block w-full p-2.5 "
          />
        </div>
      </div>
    </div>
  );
}

export default SkillsCandidate;
