import React from "react";
import { Avatar } from "antd";

import { UserOutlined } from "@ant-design/icons";

const UserAvatar = () => {
  const { profileImage } = JSON.parse(localStorage.getItem("testUserInfo"));
  return <Avatar src={profileImage} size="large" icon={<UserOutlined />} />;
};

export default UserAvatar;
