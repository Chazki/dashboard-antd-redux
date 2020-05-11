import React from "react";
import { Typography } from "antd";
const { Title } = Typography;

const titleStyles = {
  margin: 0,
  color: "#272C33",
  marginLeft: "20px",
};

const NavbarTitle = () => {
  return (
    <Title level={2} style={titleStyles}>
      FakeApp
    </Title>
  );
};

export default NavbarTitle;
