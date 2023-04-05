import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import expressAPI from "../services/expressAPI";
import chevronDown from "../assets/Icons/chevron-down.svg";
import chevronUp from "../assets/Icons/chevron-up.svg";
import { useCandidateContext } from "../contexts/CandidateContext";

function SkillsCandidate({ formErrors, setFormErrors, validate, isSubmit }) {
  const { dispatch, formState } = useCandidateContext();
  const [isOpen, setOpen] = useState(false);
  const [technologies, setTechnologies] = useState([]);
  const [candidateHardSkills, setCandidateHardSkills] = useState([]);

  const handleInput = (e) => {
    dispatch({
      type: "HANDLE_INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    expressAPI
      .get(`/technologies`)
      .then((res) => {
        return res.data.map((obj) => {
          return { ...obj, status: false };
        });
      })
      .then((rawTechno) => setTechnologies(rawTechno));
  }, []);

  const handleCheck = (e) => {
    const technoChecked = parseInt(e.target.id, 10);

    const newTechnologiesStatus = technologies.map((techno) => {
      if (techno.id === technoChecked) {
        return { ...techno, status: !techno.status };
      }
      return techno;
    });

    setTechnologies(newTechnologiesStatus);

    if (
      e.target.checked === true &&
      !candidateHardSkills.includes(e.target.id)
    ) {
      setCandidateHardSkills([...candidateHardSkills, e.target.id]);
    }
    if (
      e.target.checked === false &&
      candidateHardSkills.includes(e.target.id)
    ) {
      const updatedHardSkills = candidateHardSkills.filter(
        (id) => id !== e.target.id
      );
      setCandidateHardSkills(updatedHardSkills);
    }
  };

  useEffect(() => {
    const hardSkillsForm = candidateHardSkills.join(",");

    dispatch({
      type: "HANDLE_HARDSKILLS",
      payload: hardSkillsForm,
    });
  }, [candidateHardSkills]);

  useEffect(() => {
    setFormErrors(validate(formState));
  }, [formState]);

  return (
    <div className="m-8 font-jost">
      <h2 className="text-black text-left mb-4">Mes compétences</h2>
      <div className="flex flex-col justify-start w-full md:grid md:grid-cols-2">
        <div className="flex flex-col justify-center md:mr-2 relative">
          <button
            className="flex items-center text-sm text-grey2 text-left font-medium mb-5"
            onClick={() => setOpen(!isOpen)}
            type="button"
          >
            Hard Skills <span className="text-main-dark ml-[5px]">*</span>
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
                  <div className="flex" key={technology.id}>
                    <input
                      id={technology.id}
                      name={technology.name}
                      type="checkbox"
                      checked={technology.status}
                      onChange={handleCheck}
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
            {isSubmit && formErrors.hard_skills && (
              <p className="text-sm text-red mb-6 mt-[-12px] mx-2">
                {formErrors.hard_skills}
              </p>
            )}
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm text-left font-medium text-grey2"
          >
            Soft Skills <span className="text-main-dark">*</span>
          </label>
          <input
            type="text"
            id="base-input"
            name="soft_skills"
            autoComplete="on"
            onChange={(e) => handleInput(e)}
            className="bg-gray-50 border border-grey3 text-sm rounded focus:ring-main focus:border-main block w-full px-3 leading-9 "
          />
          {isSubmit && formErrors.soft_skills && (
            <p className="text-sm text-red mb-6 mt-[-12px] mx-2">
              {formErrors.soft_skills}
            </p>
          )}
          <p className="text-xs text-grey2 mt-2">
            (Vous pouvez donner jusqu'à 3 soft skills, séparées par une virgule)
          </p>
        </div>
      </div>
    </div>
  );
}

SkillsCandidate.propTypes = {
  formErrors: PropTypes.shape().isRequired,
  setFormErrors: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  isSubmit: PropTypes.bool.isRequired,
};

export default SkillsCandidate;
