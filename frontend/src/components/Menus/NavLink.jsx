import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavLink({ path, params, children }) {
  return (
    <Link
      to={`/${path}${params ? `/${params}` : ""}`}
      className="block px-8 py-2 text-black hover:text-main focus:text-main "
    >
      {children}
    </Link>
  );
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  params: PropTypes.string,
};

NavLink.defaultProps = {
  params: "",
};

export default NavLink;
