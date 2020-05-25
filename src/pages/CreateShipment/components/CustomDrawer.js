import React from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Drawer, Grid, Typography } from "antd";

const { useBreakpoint } = Grid;
const { Title } = Typography;

const CustomDrawer = ({
  title = "",
  width = 500,
  openDrawer = false,
  onClose,
  onSuccess,
  children,
}) => {
  const { md } = useBreakpoint();

  return (
    <Drawer
      keyboard={false}
      width={!md ? "100%" : width}
      className="new-shipment-drawer"
      title={
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button shape="circle" icon={<CloseOutlined />} onClick={onClose} />
          <Title level={4}>{title}</Title>
          <Button shape="circle" icon={<CheckOutlined />} onClick={onSuccess} />
        </div>
      }
      placement="right"
      closable={false}
      onClose={onClose}
      visible={openDrawer}
      key="right"
    >
      {children}
    </Drawer>
  );
};
export default CustomDrawer;
