import { Flex, Menu } from "antd";
import runningIcon from "../../../assets/running.png";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState("");
  const itemList = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Dashboard",
      route: "/admin/dashboard",
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "Facility Management",
      route: "/admin/dashboard/facility-management",
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: "Bookings",
      route: "/admin/dashboard/booking",
    },
    {
      key: "4",
      icon: <UserOutlined />,
      label: "Create Admin",
      route: "/admin/dashboard/create-account",
    },
  ];

  const onClick = (e: any) => {
    const selectedItem = itemList.find((item) => item.key === e.key);
    if (selectedItem && selectedItem.route) {
      setSelectedKey(e.key); // Update the selected key state
      navigate(selectedItem.route);
    }
  };
  return (
    <>
      <Flex align="center" justify="center" className="">
        <div className="logo">
          <img className="size-10" src={runningIcon} alt="" />
        </div>
      </Flex>

      <Menu
        mode="inline"
        onClick={onClick}
        items={itemList.map((item) => ({
          key: item.key,
          icon: item.icon,
          label: item.label,
        }))}
        selectedKeys={[selectedKey]}
        className="menu-bar"
      />
    </>
  );
};

export default AdminSidebar;
