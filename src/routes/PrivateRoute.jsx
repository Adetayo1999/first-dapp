import React from "react";
import { Route, Redirect } from "react-router";

function PrivateRoute({ component: Component, isActive, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isActive ? <Component {...props} /> : <Redirect to="/connect-wallet" />
      }
    />
  );
}

export default PrivateRoute;
