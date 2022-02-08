import React from "react";
import { Route, Redirect } from "react-router";

function PublicRoute({ component: Component, isActive, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => (isActive ? <Redirect to="/" /> : <Component />)}
    />
  );
}

export default PublicRoute;
