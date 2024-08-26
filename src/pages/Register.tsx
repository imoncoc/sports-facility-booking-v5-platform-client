import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { NavLink } from "react-router-dom";

const Register = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="bg-slate-100 flex justify-center items-center h-screen">
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ minWidth: 400 }}
        onFinish={onFinish}
        layout="vertical"
        className="bg-white  px-8 pt-12 pb-6 rounded-md"
      >
        <div className="mb-4 text-2xl text-center text-primary-color">
          Please Register
        </div>
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Please input your FullName!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your Email Address!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: "Please input your Phone Number!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input your Address!" }]}
        >
          <TextArea />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        {/* Field */}
        <Form.Item
          label="Confirm Password"
          name="password2"
          dependencies={["password"]}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" size="large" htmlType="submit">
            Log in
          </Button>
          Already a account? <NavLink to="/login">Login Now!</NavLink>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
