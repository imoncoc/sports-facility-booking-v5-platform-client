import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSignUPMutation } from "../redux/api/auth/authApi";
import { toast } from "sonner";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [signUP] = useSignUPMutation();
  const [userRole, setUserRole] = useState("user");
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    const userInfo = { ...values, role: userRole };
    console.log("Received values of form: ", userInfo);
    const res = await signUP(userInfo);

    console.log("res: ", res);
    if (res?.error) {
      toast.error(res?.error?.data?.message);
    } else if (res?.data?.success) {
      toast.success("User registered successfully");
      navigate("/login");
    } else {
      toast.error("Something went wrong");
    }
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
          rules={[
            { required: true },
            { min: 8, message: "Password must be at least 8 characters long!" },
          ]}
        >
          <Input.Password
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
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
          <Input.Password
            visibilityToggle={{
              visible: confirmPasswordVisible,
              onVisibleChange: setConfirmPasswordVisible,
            }}
          />
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
