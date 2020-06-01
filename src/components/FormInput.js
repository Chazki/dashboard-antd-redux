import React from "react";
import { Form, Input } from "antd";

const FormInput = ({
  style = {},
  styleInput = {},
  name,
  rules = {},
  prefix = null,
  type,
  label = null,
  hasFeedBack = false,
  dependencies = [],
  addonAfter = null,
  addonBefore = null,
  size = "large",
}) => {
  return (
    <React.Fragment>
      <Form.Item
        label={label}
        style={style}
        name={name}
        rules={rules}
        hasFeedback={hasFeedBack}
        dependencies={dependencies}
      >
        {type === "password" ? (
          <Input.Password
            size={size}
            className="form-input"
            style={styleInput}
            addonBefore={addonBefore}
            addonAfter={addonAfter}
            prefix={prefix}
          />
        ) : (
          <Input
            size={size}
            className="form-input"
            style={styleInput}
            addonBefore={addonBefore}
            addonAfter={addonAfter}
            prefix={prefix}
          />
        )}
      </Form.Item>
    </React.Fragment>
  );
};

export default FormInput;
