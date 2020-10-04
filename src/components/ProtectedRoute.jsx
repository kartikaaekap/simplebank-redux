import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { token } = userLogin;

  return token ? { component } : <Redirect to={{ pathname: "/login" }} />;
};

export default ProtectedRoute;
