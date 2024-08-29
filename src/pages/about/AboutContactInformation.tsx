import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

const AboutContactInformation = () => {
  return (
    <div className="dark:bg-slate-600 bg-slate-50">
      <div className="py-16 container mx-auto">
        <div className="mb-16">
          <h3 className="heading-title">Contact Information</h3>
          <p className="heading-p px-20">
            Our team is here to assist you with any inquiries or support. Reach
            out to us via phone, email, or visit our office for personalized
            assistance.
          </p>
        </div>

        {/* Contact us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 dark:text-cyanLight">
          {/* <!-- Phone --> */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <PhoneOutlined className="text-secondary-color text-2xl dark:text-strongCyan" />
              <div>
                <p className="text-lg font-semibold">Phone</p>
                <p className="text-md text-gray-700 dark:text-gray-300">
                  +123 456 7890
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Email --> */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <MailOutlined className="text-secondary-color text-2xl dark:text-strongCyan" />
              <div>
                <p className="text-lg font-semibold">Email</p>
                <p className="text-md text-gray-700 dark:text-gray-300">
                  imoncoc0@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Physical Address --> */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <HomeOutlined className="text-secondary-color text-2xl dark:text-strongCyan" />
              <div>
                <p className="text-lg font-semibold">Address</p>
                <p className="text-md text-gray-700 dark:text-gray-300">
                  123 Main Street
                  <br />
                  City, Country 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContactInformation;
