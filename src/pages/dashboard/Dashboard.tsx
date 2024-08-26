import { Button, Flex, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import CustomHeader from "./CustomHeader";
import MainContent from "./MainContent";
import SideContent from "./SideContent";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/userSlice";
import { verifyToken } from "../../utils/verifyToken";
import AdminSidebar from "./admin/adminSidebar";
import UserSideBar from "./user/UserSideBar";
import AdminMainContent from "./admin/AdminMainContent";
import UserMainContent from "./user/UserMainContent";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token } = useAppSelector(useCurrentToken);

  let userData;
  if (token) {
    userData = verifyToken(token);
  }

  console.log({ userData });

  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        {userData?.role === "admin" && <AdminSidebar></AdminSidebar>}
        {userData?.role === "user" && <UserSideBar></UserSideBar>}
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="trigger-btn"
        />
      </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>
        <Content className="content">
          {/* <Flex gap={"large"}>
            <MainContent />
            <SideContent />
          </Flex> */}
          {userData?.role === "admin" && <AdminMainContent></AdminMainContent>}
          {userData?.role === "user" && <UserMainContent></UserMainContent>}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
