import { useState } from "react";
import {
  selectCurrentUser,
  useCurrentToken,
} from "../../redux/features/userSlice";
import { useAppSelector } from "../../redux/hooks";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";

const ProtectedRoute = ({ children, role }) => {
  const { token } = useAppSelector(useCurrentToken);
  const { user } = useAppSelector(selectCurrentUser);
  console.log({ token });
  let userData;
  if (token) {
    userData = verifyToken(token);
  }

  console.log({ userData });

  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  console.log("role: ", role);
  console.log("userData role: ", userData.role);

  if (role && userData?.role !== user?.role) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
