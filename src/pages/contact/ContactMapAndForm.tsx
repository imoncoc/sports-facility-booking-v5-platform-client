import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import type { FormProps } from "antd";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { toast } from "sonner";

type FieldType = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const ContactMapAndForm = () => {
  const [form] = Form.useForm();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    toast.success("Successfully submitted form");

    form.resetFields();
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
    toast.error("Please check your Input");
  };

  return (
    <div className="dark:bg-slate-600 bg-slate-50">
      <div className="container mx-auto py-16">
        <div>
          <div className="flex flex-col md:flex-row mx-auto justify-center items-center gap-12">
            <div className="embed-responsive embed-responsive-16by9 w-full md:w-[50%] bg-rose-500">
              <iframe
                className="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.468892558116!2d90.4879393144548!3d23.69494399681069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b6e1a66a1093%3A0xbc2ef7ddab0a14db!2sSanarpar%20Bus%20Station!5e0!3m2!1sen!2sbd!4v1644245755999!5m2!1sen!2sbd"
                width="100%"
                height="560"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            <div className="w-full md:w-[50%]   px-16 py-8 rounded-md bg-gradient-to-tl to-strongCyan from-lightBlue ">
              <p className="text-2xl my-4 text-center text-veryDarkViolet">
                Contact Us
              </p>
              <Form
                form={form}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input className="w-full" />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input className="w-full" />
                </Form.Item>
                <Form.Item
                  label="Subject"
                  name="subject"
                  rules={[
                    { required: true, message: "Please input your subject!" },
                  ]}
                >
                  <Input className="w-full" />
                </Form.Item>
                <Form.Item
                  label="message"
                  name="message"
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <TextArea className="w-full" />
                </Form.Item>

                <Form.Item>
                  {/* <Button type="primary" htmlType="submit">
                    Submit
                  </Button> */}
                  <button
                    type="submit"
                    className="custom-button  w-full text-white"
                  >
                    Submit
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>

          {/* Contact us */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 dark:text-cyanLight">
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
    </div>
  );
};

export default ContactMapAndForm;
