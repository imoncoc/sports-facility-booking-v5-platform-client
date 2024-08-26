import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
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
        className="bg-white  px-8 pt-12 pb-6 rounded-md"
      >
        <div className="mb-4 text-2xl text-center text-primary-color">
          Please Log In
        </div>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined />}
            size="large"
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            size="large"
            placeholder="Password"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" size="large" htmlType="submit">
            Log in
          </Button>
          or <NavLink to="/register">Register now!</NavLink>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
