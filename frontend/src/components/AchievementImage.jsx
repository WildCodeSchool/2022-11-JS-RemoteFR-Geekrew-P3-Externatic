import PropTypes from "prop-types";

function AchievementImage({ src, alt }) {
  return (
    <div className="flex justify-center p-6 w-fit rounded-full shadow-image bg-white">
      <img src={src} alt={alt} />
    </div>
  );
}

AchievementImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default AchievementImage;
