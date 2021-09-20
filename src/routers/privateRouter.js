import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import Navbar from '../components/Navbar';

// Rutas Privadas !!!
export const PrivateRouter = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <div>
      <Navbar />
      <Route
        {...rest}
        component={(props) =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to="/auth/login" />
          )
        }
      />
    </div>
  );
};
PrivateRouter.propTypes = {
  isAthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
