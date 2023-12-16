import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRouteElement({ isRegistered, element }) {
  return isRegistered ? element : <Navigate to="/" replace />;
}

export default ProtectedRouteElement;
