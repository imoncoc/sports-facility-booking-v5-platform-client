import { Image } from "antd";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";
import five from "../assets/five.jpg";
import six from "../assets/six.jpg";

const HowItWorks = () => {
  return (
    <div className="dark:bg-slate-600 bg-slate-100">
      <div className="container mx-auto py-16 px-8">
        <div className="mb-16">
          <h3 className="heading-title">How it works?</h3>
          <p className="heading-p px-20">
            Learn how to book sports facilities with our simple, step-by-step
            guide in the 'How It Works' section.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-y-32 ">
          <div className="flex py-4 lg:px-16">
            <p className="p-4 text-darkGrayishBlue dark:text-grayishBlue">
              For a clear view of all available options, click on the image to
              explore and compare facilities. Find the perfect venue for your
              game with ease.
            </p>

            <Image
              style={{ height: "100px", width: "300px" }}
              className="size-20"
              src={first}
            />
          </div>

          <div className="hidden lg:block"></div>
          <div className=" relative hidden lg:block">
            <div className=" flex justify-end items-end   absolute -top-32 -right-20 ">
              <svg
                className="dash-border  "
                width="182"
                height="182"
                viewBox="0 0 182 182"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ left: "65px" }}
              >
                <path
                  d="M1.72656 1.86328C1.72656 100.386 81.5642 180.193 180.125 180.193"
                  stroke="#9F9F9F"
                  strokeWidth="2"
                  strokeMiterlimit="22.9256"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5 5"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex py-4 lg:px-16">
            <Image
              style={{ height: "100px", width: "300px" }}
              className="size-20"
              src={second}
            />
            <p className="p-4 text-darkGrayishBlue dark:text-grayishBlue">
              Click on the facility of your choice to view details and available
              booking options. Select the perfect venue for your game.
            </p>
          </div>
          <div className="flex py-4 lg:px-16">
            <p className="p-4 text-darkGrayishBlue dark:text-grayishBlue">
              Ready to secure your spot? Click 'Book Now' to confirm your
              reservation and get ready for your game!
            </p>

            <Image
              style={{ height: "100px", width: "300px" }}
              className="size-20"
              src={third}
            />
          </div>

          <div className=" relative hidden lg:block">
            <div className=" flex justify-end items-end   absolute -top-32 -left-20 ">
              <svg
                className="dash-border"
                width="182"
                height="181"
                viewBox="0 0 182 181"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ right: "65px" }}
              >
                <path
                  d="M180.273 1.42188C180.273 99.9447 100.436 179.752 1.875 179.752"
                  stroke="#9F9F9F"
                  strokeWidth="2"
                  strokeMiterlimit="22.9256"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5 5"
                ></path>
              </svg>
            </div>
          </div>
          <div className=" relative hidden lg:block">
            <div className=" flex justify-end items-end   absolute -top-32 -right-20 ">
              <svg
                className="dash-border  "
                width="182"
                height="182"
                viewBox="0 0 182 182"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ left: "65px" }}
              >
                <path
                  d="M1.72656 1.86328C1.72656 100.386 81.5642 180.193 180.125 180.193"
                  stroke="#9F9F9F"
                  strokeWidth="2"
                  strokeMiterlimit="22.9256"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5 5"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex py-4 lg:px-16">
            <Image
              style={{ height: "100px", width: "300px" }}
              className="size-20"
              src={fourth}
            />
            <p className="p-4 text-darkGrayishBlue dark:text-grayishBlue">
              Once you've confirmed availability, click 'Proceed to Payment' to
              complete your booking. Follow the prompts to finalize your
              reservation and make the payment securely.
            </p>
          </div>
          {/* new */}
          <div className="flex py-4 lg:px-16">
            <p className="p-4 text-darkGrayishBlue dark:text-grayishBlue">
              Enter your payment details to finalize the booking. Ensure all
              information is accurate for a smooth transaction. Once completed,
            </p>

            <Image
              style={{ height: "100px", width: "300px" }}
              className="size-20"
              src={five}
            />
          </div>

          <div className=" relative hidden lg:block">
            <div className=" flex justify-end items-end   absolute -top-32 -left-20 ">
              <svg
                className="dash-border"
                width="182"
                height="181"
                viewBox="0 0 182 181"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ right: "65px" }}
              >
                <path
                  d="M180.273 1.42188C180.273 99.9447 100.436 179.752 1.875 179.752"
                  stroke="#9F9F9F"
                  strokeWidth="2"
                  strokeMiterlimit="22.9256"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5 5"
                ></path>
              </svg>
            </div>
          </div>
          <div className=" relative hidden lg:block">
            <div className=" flex justify-end items-end   absolute -top-32 -right-20 ">
              <svg
                className="dash-border  "
                width="182"
                height="182"
                viewBox="0 0 182 182"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ left: "65px" }}
              >
                <path
                  d="M1.72656 1.86328C1.72656 100.386 81.5642 180.193 180.125 180.193"
                  stroke="#9F9F9F"
                  strokeWidth="2"
                  strokeMiterlimit="22.9256"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5 5"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex py-4 lg:px-16">
            <Image
              style={{ height: "100px", width: "300px" }}
              className="size-20"
              src={six}
            />
            <p className="p-4 text-darkGrayishBlue dark:text-grayishBlue">
              Payment successful! Your booking is confirmed. Check your email
              for details and enjoy your facility!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
