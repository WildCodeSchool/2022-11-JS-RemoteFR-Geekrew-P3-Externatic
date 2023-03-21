import React from "react";
import PropTypes from "prop-types";

function Tags({ name }) {
  return (
    <div className="bg-main-light text-main-dark rounded-full inline-block px-4 py-[3px] font-medium text-sm mr-4 my-4">
      {name}
    </div>
  );
}

Tags.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Tags;
