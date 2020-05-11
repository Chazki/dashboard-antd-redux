import React from "react";
import LoginImage from "./components/LoginImage";
import LoginForm from "./components/LoginForm";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";

const Login = () => {
  const {
    currentSession: { loading },
  } = useSelector((state) => state);
  return (
    <React.Fragment>
      {loading ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            zIndex: 30,
          }}
        >
          <Loader />
        </div>
      ) : null}
      <LoginImage>
        <LoginForm />
      </LoginImage>
    </React.Fragment>
  );
};
export default Login;
