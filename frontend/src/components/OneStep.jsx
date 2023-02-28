import PropTypes from "prop-types";

function OneStep({ children, tailwindClasses }) {
  return (
    <div>
      <p className={`bg-no-repeat px-4 ${tailwindClasses}`}>{children}</p>
    </div>
  );
}

OneStep.propTypes = {
  children: PropTypes.node.isRequired,
  tailwindClasses: PropTypes.string.isRequired,
};

export default OneStep;
