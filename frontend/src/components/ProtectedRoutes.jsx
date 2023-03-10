import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

function ProtectedRoutes({ user, redirectPath = "/Connexion", children }) {
  if (!user) return <Navigate to={redirectPath} replace />;

  return children || <Outlet />;
}

ProtectedRoutes.propTypes = {
  user: PropTypes.string.isRequired,
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
