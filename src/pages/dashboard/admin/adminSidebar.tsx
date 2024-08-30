import { Flex, Menu } from "antd";
import runningIcon from "../../../assets/running.png";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
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
      label: "Bookings",
      route: "/admin/dashboard/booking",
    },
    { key: "3", icon: <UserOutlined />, label: "Admin 3" },
  ];

  const onClick = (e: any) => {
    const selectedItem = itemList.find((item) => item.key === e.key);
    if (selectedItem && selectedItem.route) {
      // Ensure navigate is called with a valid string
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
        defaultSelectedKeys={["1"]}
        className="menu-bar"
      />
    </>
  );
};

export default AdminSidebar;
