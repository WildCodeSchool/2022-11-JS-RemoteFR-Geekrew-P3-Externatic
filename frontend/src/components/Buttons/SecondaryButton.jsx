import PropTypes from "prop-types";

function SecondaryButton({ children }) {
  return (
    <button
      type="button"
      className="flex justify-center w-full font-semibold text-main underline text-sm mb-6 md:w-1/5 hover:scale-70"
    >
      {children}
    </button>
  );
}

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SecondaryButton;
