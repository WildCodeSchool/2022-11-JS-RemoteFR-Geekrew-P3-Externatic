import React from "react";
import PropTypes from "prop-types";

function Tags({ techname }) {
  return (
    <div className="bg-main-light text-main-dark rounded-full inline-block px-4 py-[3px] font-medium text-sm">
      {techname}
    </div>
  );
}

Tags.propTypes = {
  techname: PropTypes.string.isRequired,
};

export default Tags;
