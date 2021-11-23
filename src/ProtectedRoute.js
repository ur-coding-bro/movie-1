import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Provide } from "./context";
import { useContext } from "react";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const value = useContext(Provide);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (value.username) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}
