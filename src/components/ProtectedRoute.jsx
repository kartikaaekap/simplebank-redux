import React from "react";
import { useSelector } from 'react-redux';
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
  const userLogin = useSelector(state => state.userLogin);
  const { token } = userLogin;
  
  return !!token ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};

export default ProtectedRoute;
