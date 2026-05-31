import React from "react";
import { useAuth } from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";
import { FC } from "react";

interface PrivateRouteProp {
  children: React.ReactElement;
}
const PrivateRoute: FC<PrivateRouteProp> = ({ children }) => {
  // take user-->
  const { user } = useAuth();

  // if no user then navigate to signup page--> so that user cant get to the main page-->
  if (!user) {
    return <Navigate to="/signup" replace={true} />;
  }

  return children;
};

export default PrivateRoute;
