import { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Select, Tooltip } from "antd";
import runningIcon from "../../src/assets/running.png";

const Navbar = () => {
  const [menuButton, setMenuButton] = useState(false);
  const [theme, setTheme] = useState(false);

  console.log({ theme });

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(!theme);
  };

  const handleChange = (value: string) => {
    if (value === "Dark") {
      setTheme(true);
    } else {
      setTheme(false);
    }
    console.log(`selected ${value}`);
  };

  const options = [
    {
      value: "Light",
      label: (
        <span>
          <SunOutlined className="text-slate-500 bg-white  " />{" "}
          <span className="me-2">Light Mode</span>
        </span>
      ),
    },
    {
      value: "Dark",
      label: (
        <span>
          <MoonOutlined className="text-slate-500 bg-white  " />{" "}
          <span className="me-2">Dark Mode</span>
        </span>
      ),
    },
  ];

  return (
    <div className="dark:bg-veryDarkBlue">
      <nav className="relative container mx-auto p-6 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-20">
            {/* <!-- Logo --> */}
            <div className="flex justify-center items-center gap-2">
              <img className="size-8" src={runningIcon} alt="" />
              <p className="text-xl font-bold uppercase text-third-color dark:text-fourth-color">
                {" "}
                <span className="text-secondary-color">S</span>
                <span className="text-primary-color">F</span> Platform
              </p>
            </div>
            {/* <!-- Left Menu --> */}
            <div className="hidden text-lg uppercase space-x-8 font-bold lg:flex">
              <NavLink
                to="/about-us"
                className="text-grayishViolet hover:text-strongCyan"
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact-us"
                className="text-grayishViolet hover:text-strongCyan"
              >
                Contact us
              </NavLink>
              <NavLink
                to="/facility-listing"
                className="text-grayishViolet hover:text-strongCyan"
              >
                Facility Listing
              </NavLink>
              <NavLink
                to="/booking"
                className="text-grayishViolet hover:text-strongCyan"
              >
                Booking
              </NavLink>
              {/* <NavLink
                to="#"
                className="text-grayishViolet hover:text-strongCyan"
                onClick={handleThemeSwitch}
              >
                DarkMode
              </NavLink> */}
            </div>
          </div>

          {/* <!-- Right Buttons Menu --> */}
          <div className="hidden items-center space-x-4 font-bold text-grayishViolet lg:flex">
            <div className="hover:text-varyDarkViolet custom-muted-button">
              Login
            </div>
            <a href="#" className="custom-primary-button">
              Sign Up
            </a>
            <div className="">
              {theme ? (
                <Tooltip placement="top" title={"Light"}>
                  <SunOutlined
                    className="text-slate-500 bg-white text-2xl p-2 cursor-pointer rounded-full shadow-md"
                    onClick={() => setTheme(false)}
                  />
                </Tooltip>
              ) : (
                <Tooltip placement="top" title={"Dark"}>
                  <MoonOutlined
                    className="text-slate-200 bg-slate-800 text-2xl p-2 rounded-full cursor-pointer shadow-md"
                    onClick={() => setTheme(true)}
                  />
                </Tooltip>
              )}
            </div>
          </div>

          {/* <!--  Hamburger Menu --> */}
          <button
            id="menu-btn"
            type="button"
            className={`${
              !menuButton ? "open" : "block"
            } hamburger lg:hidden focus:outline-none`}
            onClick={() => setMenuButton(!menuButton)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* <!--  Mobile Menu --> */}
        <div
          id="menu"
          className={`absolute p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100 lg:hidden ${
            menuButton && "hidden"
          }`}
        >
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <NavLink to="/about-us" className="w-full text-center uppercase">
              About us
            </NavLink>
            <NavLink to="/contact-us" className="w-full text-center uppercase">
              Contact us
            </NavLink>
            <NavLink
              to="/facility-listing"
              className="w-full text-center uppercase"
            >
              Facility Listing
            </NavLink>
            <NavLink to="/booking" className="w-full text-center uppercase">
              Booking
            </NavLink>
            <a href="#" className="custom-button w-full">
              Login
            </a>
            <a href="#" className="custom-primary-button w-full">
              Sign Up
            </a>

            <Select
              className="w-full"
              defaultValue="Switch Color Mode "
              style={{ width: "100%" }}
              onChange={handleChange}
              options={options}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
