import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import { FloatButton, Tooltip } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to check scroll position and toggle visibility
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      // Show the button after scrolling down 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Attach the scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {isVisible && (
        <Tooltip placement="bottomRight" title={"Go to Top"}>
          <FloatButton
            icon={<ArrowUpOutlined />} // Add an arrow icon for the button
            style={{
              right: 24,
              bottom: 24,
              backgroundColor: "hsl(171, 66%, 44%)", // Use your custom color (Green in this case)
              color: "#fff",
              border: "none",
            }} // Apply custom styles
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // Scroll to top on click
          />
        </Tooltip>
      )}
    </>
  );
};

export default MainLayout;
