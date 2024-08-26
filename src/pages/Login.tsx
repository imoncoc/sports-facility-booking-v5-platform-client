import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { Navigate, NavLink, replace, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { useLoginMutation } from "../redux/api/auth/authApi";
import { setToken, setUser } from "../redux/features/userSlice";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);
    const loginInfo = values;

    const res = await login(loginInfo);

    console.log({ res });
    console.log(res?.data?.success);

    dispatch(setUser(res.data.data));
    dispatch(setToken(res.data.token));
    if (res?.data?.success) {
      navigate("/dashboard");
    }
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
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            defaultValue="web@programming-hero.com"
            prefix={<UserOutlined />}
            size="large"
            placeholder="Email"
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
            defaultValue="programming-hero"
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
