import { MessageOutlined, NotificationOutlined } from "@ant-design/icons";
import { Avatar, Flex, Typography } from "antd";
import Search from "antd/es/input/Search";
import "./Dashboard.css";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/userSlice";

const CustomHeader = () => {
  const { user } = useAppSelector(selectCurrentUser);
  console.log({ user });

  return (
    <Flex align="center" justify="space-between" className="h-full">
      <p className="text-base md:text-xl lg:text-3xl ">
        {" "}
        Welcome back, {user.name.split(" ")[0]}
      </p>
      <Flex align="center" gap={"3rem"}>
        <div className="md:flex md:justify-center md:items-end hidden">
          <Search placeholder="Search Dashboard " allowClear />
        </div>
        <Flex align="center" gap={"10px"}>
          <MessageOutlined className="header-icon hidden md:block" />
          <NotificationOutlined className="header-icon hidden md:block" />
          <Avatar
            style={{
              backgroundColor: "hsl(233, 100%, 69%)",
              verticalAlign: "middle",
            }}
            size={36}
            gap={4}
          >
            {user?.name[0]}
          </Avatar>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CustomHeader;
