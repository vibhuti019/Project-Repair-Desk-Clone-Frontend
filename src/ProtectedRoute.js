import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticate } from "./serverRequests/authFromServer";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticate() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;
