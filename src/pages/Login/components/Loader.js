import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const loadingIcon = (
  <LoadingOutlined style={{ fontSize: 50, color: "#4F4F4F" }} spin />
);

const loaderStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  position: "fixed",
  zIndex: 1,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
};

const Loader = () => {
  return (
    <div style={loaderStyles}>
      <Spin size="large" indicator={loadingIcon} />
    </div>
  );
};

export default Loader;
