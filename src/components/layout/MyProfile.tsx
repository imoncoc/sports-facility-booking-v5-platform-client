import Dashboard from "../../pages/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

const MyProfile = () => {
  return (
    <ProtectedRoute role={undefined}>
      <Dashboard />
    </ProtectedRoute>
  );
};

export default MyProfile;
