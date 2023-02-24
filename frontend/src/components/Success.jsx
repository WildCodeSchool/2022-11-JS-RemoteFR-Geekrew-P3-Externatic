import PropTypes from "prop-types";

import SuccessImage from "./SuccessImage";

function Success({ children, title, src, alt }) {
  return (
    <div className="font-jost flex flex-col items-center my-6">
      <SuccessImage src={src} alt={alt} />
      <h2 className="text-base font-bold my-5">{title}</h2>
      <p className="font-medium text-sm text-grey1 text-left">{children}</p>
    </div>
  );
}

Success.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Success;
