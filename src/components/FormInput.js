import React from "react";
import { Form, Input } from "antd";

const FormInput = ({
  style = {},
  styleInput = {},
  name,
  rules = {},
  prefix = null,
  type,
  placeholder,
  hasFeedBack = false,
  dependencies = [],
  addonAfter = null,
  addonBefore = null,
}) => {
  return (
    <Form.Item
      style={style}
      name={name}
      rules={rules}
      hasFeedback={hasFeedBack}
      dependencies={dependencies}
    >
      {type === "password" ? (
        <Input.Password
          className="input"
          style={styleInput}
          addonBefore={addonBefore}
          addonAfter={addonAfter}
          prefix={prefix}
          placeholder={placeholder}
        />
      ) : (
        <Input
          className="inputTest"
          style={styleInput}
          addonBefore={addonBefore}
          addonAfter={addonAfter}
          prefix={prefix}
          placeholder={placeholder}
        />
      )}
    </Form.Item>
  );
};

export default FormInput;
