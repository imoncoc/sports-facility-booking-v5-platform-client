import { Button, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import "./Dashboard.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import CustomHeader from "./CustomHeader";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/userSlice";
import { verifyToken } from "../../utils/verifyToken";
import UserSideBar from "./user/UserSideBar";
import AdminMainContent from "./admin/AdminMainContent";
import UserMainContent from "./user/UserMainContent";
import AdminSidebar from "./admin/AdminSidebar";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token } = useAppSelector(useCurrentToken);

  let userData;
  if (token) {
    userData = verifyToken(token);
  }

  const userRole = (userData as { role?: string }).role;

  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        {userRole && userRole === "admin" && <AdminSidebar></AdminSidebar>}
        {userRole && userRole === "user" && <UserSideBar></UserSideBar>}
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
          {userRole && userRole === "admin" && (
            <AdminMainContent></AdminMainContent>
          )}
          {userRole && userRole === "user" && (
            <UserMainContent></UserMainContent>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
