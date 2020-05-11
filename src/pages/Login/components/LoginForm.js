import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Form, Button, Typography, notification } from "antd";
import {
  UserOutlined,
  LockOutlined,
  TeamOutlined,
  CloseCircleFilled,
  FrownOutlined,
  SmileOutlined,
} from "@ant-design/icons";

import FormInput from "../../../components/FormInput";
import { loginUserRequest } from "../../../actions";

notification.config({
  placement: "topRight",
  duration: 2,
});

const { Title } = Typography;

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
      <Title className="form-title" level={1}>
        Ingresa a tu cuenta
      </Title>
      <Form className="login-form" onFinish={onFinish}>
        <FormInput
          hasFeedBack
          name="email"
          rules={[
            requiredRule("email"),
            {
              type: "email",
              message: "Email no válido*",
            },
          ]}
          prefix={<UserOutlined />}
          placeholder="Usuario"
        />
        <FormInput
          hasFeedBack
          name="password"
          rules={[requiredRule("contraseña")]}
          prefix={<LockOutlined />}
          type="password"
          placeholder="Contraseña"
        />
        <FormInput
          hasFeedBack
          name="teamUrl"
          rules={[requiredRule("equipo")]}
          prefix={<TeamOutlined />}
          placeholder="Equipo"
        />
        <Form.Item
          className="submit-button-container"
          style={{ margin: 0, textAlign: "center" }}
        >
          <Button htmlType="submit">
            <span className="submit-button-label">Ingresar</span>
          </Button>
          {/* <div style={{ textAlign: "end", paddingTop: "10px" }}>
            Or <Link to="/register">register now</Link>
          </div> */}
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
