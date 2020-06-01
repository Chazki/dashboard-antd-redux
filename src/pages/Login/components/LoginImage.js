import React from "react";
import image from "../../../images/bicycle.jpeg";

// const backgroundOpacity = {
//   position: "relative",
//   zIndex: 20,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "#272C33",
//   opacity: 0.7,
// };

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
        height: "100vh",
        position: "relative",
        zIndex: 20,
      }}
    >
      <div style={backgroundImage} />
      {/* <div className="background-wrapper-form" /> */}
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
      <svg
        preserveAspectRatio="none"
        id="path-container"
        width="100vw"
        viewBox="0 0 1448 668"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1448 668H0V0L730 350L1448 0V668Z" fill="#3f293e" />
      </svg>
    </div>
  );
};

export default LoginImage;
