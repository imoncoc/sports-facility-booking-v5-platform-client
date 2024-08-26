import { useState } from "react";
import {
  selectCurrentUser,
  useCurrentToken,
} from "../../redux/features/userSlice";
import { useAppSelector } from "../../redux/hooks";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAppSelector(selectCurrentUser);
  const { token } = useAppSelector(useCurrentToken);
  console.log({ token });
  const [isAuth, setIsAuth] = useState(true);

  console.log({ isAuth });

  if (!isAuth) {
    return <Navigate to={"/dashboard"} />;
  }

  return children;
};

export default ProtectedRoute;
