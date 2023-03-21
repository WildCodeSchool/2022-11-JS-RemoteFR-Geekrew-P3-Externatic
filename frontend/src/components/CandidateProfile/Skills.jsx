import PropTypes from "prop-types";

import Tags from "../Tags";

function Skills({ softSkills, hardSkills }) {
  return (
    <div>
      <h2 className="font-semibold mt-5">Compétences</h2>
      <div className="md:flex md:flex-row">
        <div className="md:w-1/2">
          <h3 className="text-grey2 font-semibold pt-3">Hard Skills</h3>
          {hardSkills.split(",").map((technology) => (
            <Tags key={`${technology}`} name={technology} />
          ))}
        </div>
        <div className="mb-10 md:w-1/2">
          <h3 className="text-grey2 font-semibold py-3">Soft Skills</h3>
          <p className="text-sm">{softSkills} </p>
        </div>
      </div>
    </div>
  );
}

Skills.propTypes = {
  softSkills: PropTypes.string.isRequired,
  hardSkills: PropTypes.string.isRequired,
};

export default Skills;
