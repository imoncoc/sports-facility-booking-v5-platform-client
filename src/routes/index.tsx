import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import NotFoundRoute from "../shared/NotFoundRoute";
import Hero from "../shared/Hero";
import CustomerTestimonials from "../shared/CustomerTestimonials";
import WhoCanUse from "../shared/WhoCanUse";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import AboutUs from "../pages/about/aboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
            <WhoCanUse />
            <CustomerTestimonials />
          </>
        ),
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute role="user">
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFoundRoute />,
  },
]);

export default router;
