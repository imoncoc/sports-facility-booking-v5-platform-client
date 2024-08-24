import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuButton, setMenuButton] = useState(false);

  return (
    <div>
      <nav className="relative container mx-auto p-6 dark:bg-veryDarkBlue">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-20">
            {/* <!-- Logo --> */}
            {/* <img src="./images/logo.svg" alt=""> */}
            {/* <!-- Left Menu --> */}
            <div className="hidden space-x-8 font-bold lg:flex">
              <a href="#" className="text-grayishViolet hover:text-strongCyan">
                Features
              </a>
              <a href="#" className="text-grayishViolet hover:text-strongCyan">
                Pricing
              </a>
              <a href="#" className="text-grayishViolet hover:text-strongCyan">
                Resources
              </a>
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
            <a href="#" className="w-full text-center">
              Features
            </a>
            <a href="#" className="w-full text-center">
              Pricing
            </a>
            <a href="#" className="w-full text-center">
              Resources
            </a>
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
