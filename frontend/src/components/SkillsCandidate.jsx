import React, { useState, useEffect } from "react";
import expressAPI from "../services/expressAPI";
import chevronDown from "../assets/Icons/chevron-down.svg";
import chevronUp from "../assets/Icons/chevron-up.svg";
import { useCandidateContext } from "../contexts/CandidateContext";

function SkillsCandidate() {
  const { dispatch } = useCandidateContext();
  const [isOpen, setOpen] = useState(false);
  const [technologies, setTechnologies] = useState([]);

  const handleInput = (e) => {
    dispatch({
      type: "HANDLE_INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    expressAPI.get(`/technologies`).then((res) => {
      setTechnologies(res.data);
    });
  }, []);

  return (
    <div className="m-8 ">
      <h2 className="text-sm text-black text-left font-medium mb-4">
        Mes compétences
      </h2>
      <div className="flex flex-col justify-start w-full md:grid md:grid-cols-2">
        <div className="flex justify-center items-center md:mr-2">
          <button
            className="flex text-sm text-black text-left font-medium"
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

          {technologies.map(
            (technology) =>
              isOpen && (
                <>
                  <input
                    id={technology.name}
                    name={technology.name}
                    type="checkbox"
                  />
                  <label htmlFor={technology.name}>{technology.name}</label>
                  <br />
                </>
              )
          )}
        </div>
        <div className="w-full">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm text-left font-medium text-grey2 dark:text-white"
          >
            Soft Skills
          </label>
          <input
            type="text"
            id="base-input"
            name="soft_skills"
            onChange={(e) => handleInput(e)}
            className="bg-gray-50 border border-grey3 text-sm rounded focus:ring-main focus:border-main block w-full p-2.5 "
          />
          <p className="text-xxs text-grey2 mt-2">
            (Vous pouvez donner jusqu'à 3 soft skills, séparées par une virgule)
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkillsCandidate;
