import PropTypes from "prop-types";

function Step({ children, tailwindClasses }) {
  return (
    <div>
      <p className={`bg-no-repeat px-4 ${tailwindClasses}`}>{children}</p>
    </div>
  );
}

Step.propTypes = {
  children: PropTypes.node.isRequired,
  tailwindClasses: PropTypes.string.isRequired,
};

export default Step;
