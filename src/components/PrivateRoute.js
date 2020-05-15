import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";

import MainLayout from "../layout/MainLayout";

const PrivateRoute = ({ component: Component, label, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <MainLayout label={label}>
            <LoadScript
              libraries={["places"]}
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_APIKEY}
              loadingElement={<div style={{ width: "100%", height: "100%" }} />}
            >
              <Component {...props} />
            </LoadScript>
          </MainLayout>
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
