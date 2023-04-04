import PropTypes from "prop-types";

function SecondaryButton({ children, handleClick }) {
  return (
    <button
      onClick={handleClick}
      type="button"
      className="flex font-jost justify-center w-full font-semibold text-main underline decoration-2 text-sm mb-6 md:w-1/5 hover:text-main-dark"
    >
      {children}
    </button>
  );
}

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
};

SecondaryButton.defaultProps = {
  handleClick: () => {},
};

export default SecondaryButton;
