import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import NotFoundRoute from "../shared/NotFoundRoute";
import Hero from "../shared/Hero";
import CustomerTestimonials from "../shared/CustomerTestimonials";
import WhoCanUse from "../shared/WhoCanUse";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import ContactUs from "../pages/contact/ContactUs";
import FacilityListing from "../pages/facility/FacilityListing";
import Booking from "../pages/booking/Booking";
import FacilityDetails from "../pages/facility/FacilityDetails";

import HowItWorks from "../shared/HowItWorks";
import FeaturedFacilities from "../shared/FeaturedFacilities";
import AboutUs from "../pages/about/AboutUs";
import UserDashBoard from "../pages/dashboard/UserDashBoard";
import UserMainContent from "../pages/dashboard/user/UserMainContent";
import UserBooking from "../pages/dashboard/user/UserBooking";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import AdminMainContent from "../pages/dashboard/admin/AdminMainContent";
import AdminBooking from "../pages/dashboard/admin/AdminBooking";

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
            <FeaturedFacilities />
            <WhoCanUse />
            <HowItWorks />
            <CustomerTestimonials />
          </>
        ),
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "facility-listing",
        element: <FacilityListing />,
      },
      {
        path: "facility-listing/:id",
        element: <FacilityDetails />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "booking/:id",
        element: <Booking />,
      },
    ],
  },
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    children: [
      {
        index: true,
        element: (
          <>
            <AdminMainContent />
          </>
        ),
      },

      {
        path: "booking",
        element: <AdminBooking />,
      },
    ],
  },
  {
    path: "user/dashboard",
    element: <UserDashBoard />,
    children: [
      {
        index: true,
        element: (
          <>
            <UserMainContent></UserMainContent>
          </>
        ),
      },

      {
        path: "my-booking",
        element: <UserBooking />,
      },
    ],
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
