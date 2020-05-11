import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
// import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import privateRoutes from "./routes";

const App = () => {
  const location = useLocation();

  return (
    <Switch>
      {location.pathname !== "/" ? (
        <Route exact path="/login" component={Login} />
      ) : (
        <Redirect to="/login" />
      )}
      {/* <Route path="/register" component={Register} /> */}
      {privateRoutes.map(({ path, component, label }) => (
        <PrivateRoute
          key={path}
          exact
          path={path}
          label={label}
          component={component}
        />
      ))}
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
