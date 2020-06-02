import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Form, Button, notification } from "antd";
import { FrownOutlined, SmileOutlined } from "@ant-design/icons";

import FormInput from "../../../components/FormInput";
import { loginUserRequest } from "../../../actions";
import todovaLogo from "../../../images/todovaLogo.jpeg";

notification.config({
  placement: "topRight",
  duration: 1.5,
});

const getStatusNotification = (status, description) => {
  const notificationOpenConfig = {
    icon: undefined,
    style: {
      borderRadius: "7px",
      color: "#FFF",
      backgroundColor: undefined,
    },
    description,
    message: (
      <div
        style={{
          textTransform: "capitalize",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        {status}
      </div>
    ),
  };
  if (status === "error") {
    notificationOpenConfig.style.backgroundColor = "#ff4d4f";
    notificationOpenConfig.icon = <FrownOutlined />;
  } else if (status === "success") {
    notificationOpenConfig.style.backgroundColor = "#39C26F";
    notificationOpenConfig.icon = <SmileOutlined />;
  }

  notification.open(notificationOpenConfig);
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values) => {
    dispatch(loginUserRequest(values, history, getStatusNotification));
  };

  return (
    <div className="form-wrapper">
      <img className="form-logo" alt="TodoVa Logo" src={todovaLogo} />
      <Form className="login-form" onFinish={onFinish}>
        <FormInput required label="Team URL" name="teamUrl" type="text" />
        <FormInput required label="Email" name="email" type="email" />
        <FormInput
          required
          label="Contraseña"
          name="password"
          type="password"
        />
        <Form.Item className="submit-button-container">
          <Button className="submit-button" htmlType="submit">
            <span className="submit-button-label">Ingresar</span>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
