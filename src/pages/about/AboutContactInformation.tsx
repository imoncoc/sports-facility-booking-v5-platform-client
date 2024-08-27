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

        {/* Icon */}
        <div className="flex flex-row flex-wrap justify-center mx-auto gap-12 items-center text-veryDarkViolet dark:text-slate-200">
          <div className="flex gap-4">
            <HomeOutlined className="text-secondary-color dark:text-strongCyan" />
            <p>123 Sports Lane, City, State</p>
          </div>
          <div className="flex gap-4">
            <PhoneOutlined className="text-secondary-color dark:text-strongCyan" />
            <p>+123 456 7890</p>
          </div>
          <div className="flex gap-4">
            <MailOutlined className="text-secondary-color dark:text-strongCyan" />
            <p>imoncoc0@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContactInformation;
