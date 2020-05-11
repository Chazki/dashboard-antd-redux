import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Select, Button } from "antd";

import FormInput from "../../../components/FormInput";
import { countriesData } from "../../../lib/CountriesData";

import { registerUserRequest } from "../../../actions";

const { Option } = Select;

const emailRules = [
  {
    type: "email",
    message: "Email no válido*",
  },
  {
    required: true,
    message: "Por favor ingrese su email*",
  },
];

const passwordRules = [
  {
    required: true,
    message: "Por favor ingrese su contraseña*",
  },
];

const countryRules = [
  {
    required: true,
    message: "Por favor seleccione su país",
  },
];

const confirmPasswordRules = [
  {
    required: true,
    message: "Por favor confirme su contraseña*",
  },
  ({ getFieldValue }) => ({
    validator(rule, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject("Las contraseñas no coinciden*");
    },
  }),
];

const usernameRules = [
  {
    required: true,
    message: "Por favor ingrese su nombre de usuario*",
    whitespace: true,
  },
];

const phoneRules = [
  { required: true, message: "Por favor ingrese su teléfono*" },
];

const countryOptions = (
  <Select placeholder="País">
    {countriesData.map(({ name }) => (
      <Option key={name} value={name}>
        {name}
      </Option>
    ))}
  </Select>
);

const RegisterFormContent = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(registerUserRequest(values, history));
  };

  const prefixSelector = (
    <Form.Item name="country_code" noStyle>
      <Select style={{ width: 85, scrollbarWidth: "1px" }} placeholder="+51">
        {countriesData.map(({ dial_code, name }) => (
          <Option key={name} value={dial_code}>
            {dial_code}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );

  return (
    <Form form={form} name="register" onFinish={onFinish} scrollToFirstError>
      <FormInput
        name="username"
        rules={usernameRules}
        placeholder="Usuario"
        hasFeedBack
      />
      <FormInput
        name="email"
        rules={emailRules}
        placeholder="Email"
        hasFeedBack
      />
      <FormInput
        type="password"
        name="password"
        rules={passwordRules}
        placeholder="Contraseña"
        hasFeedBack
      />
      <FormInput
        type="password"
        name="confirmPassword"
        rules={confirmPasswordRules}
        dependencies={["password"]}
        placeholder="Confirmar contraseña"
        hasFeedBack
      />

      <Form.Item hasFeedback name="country" rules={countryRules}>
        {countryOptions}
      </Form.Item>
      <FormInput
        hasFeedBack
        name="phone"
        rules={phoneRules}
        addonBefore={prefixSelector}
        placeholder="Teléfono"
        styleInput={{ width: "100%" }}
      />
      <Form.Item style={{ margin: 0 }}>
        <Button style={{ width: "100%" }} type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterFormContent;
