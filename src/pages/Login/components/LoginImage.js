import React from "react";
import image from "../../../images/backgroundImg.jpg";

const backgroundOpacity = {
  position: "relative",
  zIndex: 20,
  width: "100%",
  height: "100%",
  backgroundColor: "#272C33",
  opacity: 0.7,
};

const backgroundImage = {
  position: "absolute",
  zIndex: 10,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${image})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const LoginImage = ({ children }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        zIndex: 20,
      }}
    >
      <div style={backgroundImage}></div>
      <div style={backgroundOpacity}></div>
      <div
        style={{
          position: "absolute",
          zIndex: 30,
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default LoginImage;
