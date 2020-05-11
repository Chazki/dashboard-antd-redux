import React from "react";

import RegisterFormTitle from "./RegisterFormTitle";
import RegisterFormContent from "./RegisterFormContent";

const registerFormStyles = {
  width: "340px",
  padding: "20px",
  backgroundColor: "#F2F2F2",
  borderRadius: "5px",
};

const RegisterForm = () => {
  return (
    <div style={registerFormStyles}>
      <RegisterFormTitle />
      <RegisterFormContent />
    </div>
  );
};

export default RegisterForm;
