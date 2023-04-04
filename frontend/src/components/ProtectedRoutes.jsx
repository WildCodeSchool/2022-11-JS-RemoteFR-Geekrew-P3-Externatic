import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

function ProtectedRoutes({ isAllowed, redirectPath = "/Connexion", children }) {
  if (!isAllowed) return <Navigate to={redirectPath} replace />;

  return children || <Outlet />;
}

ProtectedRoutes.propTypes = {
  isAllowed: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ProtectedRoutes.defaultProps = {
  redirectPath: "/Connexion",
  children: <Outlet />,
};

export default ProtectedRoutes;
