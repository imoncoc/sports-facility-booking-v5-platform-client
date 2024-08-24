import { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Select, Tooltip } from "antd";

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
            {/* <img src="./images/logo.svg" alt=""> */}
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
              <NavLink
                to="#"
                className="text-grayishViolet hover:text-strongCyan"
                onClick={handleThemeSwitch}
              >
                DarkMode
              </NavLink>
            </div>
          </div>

          {/* <!-- Right Buttons Menu --> */}
          <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
            <div className="hover:text-varyDarkViolet">Login</div>
            <a
              href="#"
              className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
            >
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
            <a
              href="#"
              className="w-full text-center pt-6 border-t border-gray-400"
            >
              Login
            </a>
            <a
              href="#"
              className="w-full text-center py-3 rounded-full bg-cyan"
            >
              Sign Up
            </a>

            <Select
              className="w-full"
              defaultValue="lucy"
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
