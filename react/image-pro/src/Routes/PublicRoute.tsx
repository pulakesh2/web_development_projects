import React from "react";
import { useAuth } from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";
import { FC } from "react";

// ithis is use for children-->
interface PublicRouteProp {
  children: React.ReactElement;
}

// already mention in useAuth-->
const PublicRoute: FC<PublicRouteProp> = ({ children }) => {
  // take user-->
  const { user } = useAuth();

  // if there is user then navigate to home page-->
  if (user) {
    return <Navigate to="/" replace={true} />;
  }

  // return children-->
  return children;
};

export default PublicRoute;
