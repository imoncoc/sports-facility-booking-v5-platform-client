import { ReactNode } from "react";
import {
  selectCurrentUser,
  useCurrentToken,
} from "../../redux/features/userSlice";
import { useAppSelector } from "../../redux/hooks";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";

interface ProtectedRouteProps {
  children: ReactNode; // ReactNode type represents any valid React child
  role?: string; // Role is optional, and you can adjust the type if needed
}

const ProtectedRoute = ({ children, role }: ProtectedRouteProps) => {
  const { token } = useAppSelector(useCurrentToken);
  const { user } = useAppSelector(selectCurrentUser);

  let userData;

  if (token) {
    userData = verifyToken(token);
  }

  // if (!userData) {
  //   return <Navigate to="/login" replace />;
  // }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const userRole = (userData as { role?: string }).role;

  if (role !== undefined && role !== user.role) {
    return <Navigate to="/login" replace />;
  }
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
