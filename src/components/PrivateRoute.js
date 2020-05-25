import React from "react";
import { Route, Redirect } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const PrivateRoute = ({ component: Component, label, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <MainLayout label={label}>
            <Component {...props} />
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
