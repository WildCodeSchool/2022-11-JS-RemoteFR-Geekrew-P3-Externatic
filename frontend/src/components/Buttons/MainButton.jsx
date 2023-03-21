import PropTypes from "prop-types";

function MainButton({ children, handleClick }) {
  return (
    <button
      onClick={handleClick}
      type="button"
      className="flex justify-center py-3 w-full rounded-full bg-main font-semibold text-white text-sm mb-6 md:w-1/4"
    >
      {children}
    </button>
  );
}

MainButton.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MainButton;
