import React from "react";
import { Route, Redirect } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { LoadScript } from "@react-google-maps/api";

const PrivateRoute = ({ component: Component, label, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <LoadScript
            libraries={["places"]}
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_APIKEY}
            loadingElement={<div style={{ width: "100%", height: "100%" }} />}
          >
            <MainLayout label={label}>
              <Component {...props} />
            </MainLayout>
          </LoadScript>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
