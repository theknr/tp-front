import { Navigate } from "react-router-dom";
import { useAuth } from "@/app/core/auth-context.tsx";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
