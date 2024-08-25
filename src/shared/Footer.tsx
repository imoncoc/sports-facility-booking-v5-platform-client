import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import runningIcon from "../assets/running.png";

const Footer = () => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <footer className="py-16 bg-veryDarkBlue">
      {/* <!-- Footer Flex Container --> */}
      <div className="container flex flex-col  items-center justify-between mx-auto space-y-16 px-16 md:flex-row md:space-y-0">
        {/* <!-- Logo/Menu Container --> */}
        <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-8 text-grayishBlue">
          <NavLink to={"/"}>
            <div className="flex justify-center items-center gap-2">
              <img className="size-8" src={runningIcon} alt="" />
              <p className="text-xl font-bold uppercase text-fourth-color dark:text-fourth-color">
                {" "}
                <span className="text-secondary-color">S</span>
                <span className="text-primary-color">F</span> Platform
              </p>
            </div>
          </NavLink>

          <NavLink to={"/about-us"} className="uppercase hover:text-strongCyan">
            About Us
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className="uppercase hover:text-strongCyan"
          >
            Contact Us
          </NavLink>
          <NavLink
            to={"/facility-listing"}
            className="uppercase hover:text-strongCyan"
          >
            Facility Listing
          </NavLink>
          <NavLink to={"/booking"} className="uppercase hover:text-strongCyan">
            Booking
          </NavLink>
        </div>

        {/* <!-- Social Container --> */}
        <div className="flex space-x-10">
          {/* <img src={facebookIcon} alt="" className="h-6 hover:bg-lime-500 " /> */}
          <FacebookOutlined
            className="text-2xl text-white hover:text-lightBlue cursor-pointer transition duration-500"
            style={{}}
          />
          <TwitterOutlined className="text-2xl text-white hover:text-lightBlue cursor-pointer transition duration-500" />
          <InstagramOutlined className="text-2xl text-white hover:text-lightBlue cursor-pointer transition duration-500" />
        </div>
      </div>

      <div className="container mx-auto text-sm  mt-12 mb-8">
        <p className="text-center text-grayishBlue">
          Copyright ©{new Date().getFullYear()} All rights reserved by{" "}
          <span className="uppercase text-strongCyan">Md Imon Hossain</span>.
        </p>
        <p className="text-center text-grayishBlue">
          Information refreshed on:{" "}
          <span className="text-lightBlue">{today}</span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
