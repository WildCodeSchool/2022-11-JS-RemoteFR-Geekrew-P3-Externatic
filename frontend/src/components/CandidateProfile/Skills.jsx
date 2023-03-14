import PropTypes from "prop-types";

import Tags from "../Tags";

function Skills({ technologies }) {
  return (
    <div>
      <h2 className="font-semibold mt-5">Compétences</h2>
      <div>
        <h3 className="text-grey2 font-semibold pt-3">Hard Skills</h3>
        <Tags name={technologies} />
        <Tags name={technologies} />
        <Tags name={technologies} />
      </div>
      <div className="mb-10">
        <h3 className="text-grey2 font-semibold py-3">Soft Skills</h3>
        <p className="text-sm">Curiosité, capacité d'adaptation, dynamisme </p>
      </div>
    </div>
  );
}

Skills.propTypes = {
  technologies: PropTypes.string.isRequired,
};

export default Skills;
