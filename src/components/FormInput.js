import React from "react";
import { Form, Input } from "antd";

const emailRule = {
  type: "email",
  message: "Email no válido",
};

const isRequired = () => {
  return {
    required: true,
    message: "Este campo es requerido",
  };
};

const FormInput = ({
  style = {},
  styleInput = {},
  rules = [],
  name,
  type,
  label = null,
  size = "large",
  required = false,
}) => {
  return (
    <Form.Item
      label={label}
      style={style}
      name={name}
      rules={[
        ...rules,
        required && isRequired(),
        type === "email" && emailRule,
      ]}
    >
      {type === "password" ? (
        <Input.Password
          type={type}
          size={size}
          className="form-input"
          style={styleInput}
        />
      ) : (
        <Input
          type={type}
          size={size}
          className="form-input"
          style={styleInput}
        />
      )}
    </Form.Item>
  );
};

export default FormInput;
