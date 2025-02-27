import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? children : <Navigate to="/adminLogin" />;
};

export default ProtectedRoute;

// Define PropTypes
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
