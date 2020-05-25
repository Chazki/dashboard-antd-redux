import React from "react";
import CardContent from "../../../components/ContentCard";
import { Avatar, Descriptions } from "antd";
import { UserOutlined } from "@ant-design/icons";

const DriverDetails = ({ driver }) => {
  return (
    <CardContent>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Avatar
          style={{ minWidth: 170 }}
          size={170}
          src={driver.profileImage}
          icon={<UserOutlined />}
        />
      </div>
      <Descriptions
        bordered
        column={{ xs: 1, sm: 1, md: 1, lg: 1 }}
        style={{ marginTop: 20 }}
      >
        <Descriptions.Item label="Nombre">
          {driver.firstName} {driver.lastName}
        </Descriptions.Item>
        <Descriptions.Item label="Email">{driver.email}</Descriptions.Item>
        <Descriptions.Item label="Teléfono">{driver.phone}</Descriptions.Item>
      </Descriptions>
    </CardContent>
  );
};

export default DriverDetails;
