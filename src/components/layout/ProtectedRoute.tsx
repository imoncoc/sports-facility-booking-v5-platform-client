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

  console.log({ role });

  let userData;
  console.log({ role });
  console.log({ user });

  if (token) {
    userData = verifyToken(token);
  }

  // if (!userData) {
  //   return <Navigate to="/login" replace />;
  // }
  const userRole = (userData as { role?: string }).role;
  console.log({ userRole });
  if (role !== undefined && role !== user.role) {
    return <Navigate to="/login" replace />;
  }
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
