import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import NotFoundRoute from "../shared/NotFoundRoute";
import Hero from "../shared/Hero";
import CustomerTestimonials from "../shared/CustomerTestimonials";

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
            <CustomerTestimonials />
          </>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundRoute />,
  },
]);

export default router;
