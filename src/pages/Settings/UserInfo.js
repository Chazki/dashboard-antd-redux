import React from "react";
import { Descriptions, Col } from "antd";

const UserInfo = () => {
  const {
    firstName,
    lastName,
    phone,
    email,
    birthDay,
    birthMonth,
    birthYear,
  } = JSON.parse(localStorage.getItem("testUserInfo"));

  return (
    <Col>
      <Descriptions
        bordered
        column={{ xxl: 2, xl: 1, lg: 1, md: 1, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Nombre completo">
          {firstName} {lastName}
        </Descriptions.Item>
        <Descriptions.Item label="Email">{email}</Descriptions.Item>
        <Descriptions.Item label="Teléfono">{phone}</Descriptions.Item>
        <Descriptions.Item label="Fecha de nacimiento">
          {birthDay}/{birthMonth}/{birthYear}
        </Descriptions.Item>
      </Descriptions>
    </Col>
  );
};

export default UserInfo;
