import PropTypes from "prop-types";

function SocialButton({ src, alt, children }) {
  return (
    <button
      type="button"
      className="flex justify-center py-3 w-full rounded-full border-2 border-black font-semibold mb-6"
    >
      <img src={src} alt={alt} className="mr-3" />
      {children}
    </button>
  );
}

SocialButton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SocialButton;
