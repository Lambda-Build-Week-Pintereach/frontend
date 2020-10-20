import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  errorStatusCode,
  token,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        token && errorStatusCode !== 403 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = ({ token, errorStatusCode }) => ({
  errorStatusCode,
  token
});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(PrivateRoute)
);
