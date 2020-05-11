import React from "react";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        backgroundColor: "#712162",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RegisterForm />
    </div>
  );
};

export default Register;
