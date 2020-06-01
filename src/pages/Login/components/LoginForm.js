import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Form, Button, notification } from "antd";
import {
  // UserOutlined,
  // LockOutlined,
  // TeamOutlined,
  CloseCircleFilled,
  FrownOutlined,
  SmileOutlined,
} from "@ant-design/icons";

import FormInput from "../../../components/FormInput";
import { loginUserRequest } from "../../../actions";
import todovaLogo from "../../../images/todovaLogo.jpeg";

notification.config({
  placement: "topRight",
  duration: 2,
});

const requiredRule = (string) => {
  return {
    required: true,
    message: `Por favor ingrese su ${string}*`,
  };
};

const toCapitalize = (string) => {
  return string.substring(0, 1).toUpperCase() + string.substring(1);
};

const statusNotification = (status, message) => {
  let statusStyles = { fontWeight: "bold" };
  let icon;
  if (status === "error") {
    statusStyles = { ...statusStyles, color: "#e73c3c" };
    icon = <FrownOutlined style={{ color: "#e73c3c" }} />;
  } else if (status === "success") {
    statusStyles = {
      ...statusStyles,
      color: "#39C26F",
    };
    icon = <SmileOutlined style={{ color: "#39C26F" }} />;
  }
  notification.open({
    icon,
    style: { borderRadius: "7px" },
    closeIcon: <CloseCircleFilled />,
    message: <div style={statusStyles}>{toCapitalize(status)}</div>,
    description: message,
  });
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values) => {
    dispatch(loginUserRequest(values, history, statusNotification));
  };

  return (
    <div className="form-wrapper">
      <h1 className="form-title">
        <img alt="TodoVa Logo" src={todovaLogo} />
      </h1>
      <Form className="login-form" onFinish={onFinish}>
        <FormInput
          label="USUARIO"
          name="email"
          rules={[
            requiredRule("email"),
            {
              type: "email",
              message: "Email no válido*",
            },
          ]}
        />
        <FormInput
          label="CONTRASEÑA"
          name="password"
          rules={[requiredRule("contraseña")]}
          type="password"
        />
        <FormInput
          label="TEAM"
          name="teamUrl"
          rules={[requiredRule("equipo")]}
        />
        <Form.Item
          className="submit-button-container"
          // style={{ margin: 0, textAlign: "center" }}
        >
          <Button className="submit-button" htmlType="submit">
            <span className="submit-button-label">Ingresar</span>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
