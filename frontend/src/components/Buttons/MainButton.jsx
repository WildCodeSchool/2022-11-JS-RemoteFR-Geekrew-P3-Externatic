import PropTypes from "prop-types";

function MainButton({ children }) {
  return (
    <button
      type="button"
      className="flex justify-center py-3 w-full rounded-full bg-main font-semibold text-white text-sm mb-6 md:w-1/4 hover:scale-90"
    >
      {children}
    </button>
  );
}

MainButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainButton;
