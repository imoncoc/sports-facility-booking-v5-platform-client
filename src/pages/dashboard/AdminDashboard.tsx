import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/userSlice";
import { verifyToken } from "../../utils/verifyToken";
import { Button, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
// import AdminSidebar from "./admin/AdminSidebar";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import CustomHeader from "./CustomHeader";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "../../components/layout/ProtectedRoute";
import AdminSidebar from "./admin/AdminSidebar";

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token } = useAppSelector(useCurrentToken);

  let userData;
  if (token) {
    userData = verifyToken(token);
  }

  const userRole = (userData as { role?: string }).role;

  return (
    <ProtectedRoute role={"admin"}>
      <Layout>
        <Sider
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="sider"
        >
          {userRole && userRole === "admin" && <AdminSidebar></AdminSidebar>}
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
              // <AdminMainContent></AdminMainContent>
              <Outlet />
            )}
          </Content>
        </Layout>
      </Layout>
    </ProtectedRoute>
  );
};

export default AdminDashboard;
