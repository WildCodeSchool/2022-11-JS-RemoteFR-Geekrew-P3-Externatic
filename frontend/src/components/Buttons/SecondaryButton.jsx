import PropTypes from "prop-types";

function SecondaryButton({ children }) {
  return (
    <button
      type="button"
      className="flex font-jost justify-center w-full font-semibold text-main underline decoration-2 text-sm mb-6 md:w-1/5"
    >
      {children}
    </button>
  );
}

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SecondaryButton;
