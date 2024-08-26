import { Flex, Menu } from "antd";
import runningIcon from "../../../assets/running.png";
import { UserOutlined } from "@ant-design/icons";

const adminSidebar = () => {
  const itemList = [
    { key: "1", icon: <UserOutlined />, label: "Dashboard" },
    { key: "2", icon: <UserOutlined />, label: "Admin 2" },
    { key: "3", icon: <UserOutlined />, label: "Admin 3" },
  ];
  return (
    <>
      <Flex align="center" justify="center" className="">
        <div className="logo">
          <img className="size-10" src={runningIcon} alt="" />
        </div>
      </Flex>

      <Menu
        mode="inline"
        items={itemList}
        defaultSelectedKeys={["1"]}
        className="menu-bar"
      />
    </>
  );
};

export default adminSidebar;
