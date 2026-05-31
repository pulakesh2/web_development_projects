import React, { useState } from "react";
import Auth from "./Auth";

const AuthProvider = (props) => {
  const [userData, setUserData] = useState([]);
  const [userInterest, setUserInterest] = useState([]);
  const getUser = (user) => {
    const userDetails = {
      name: user,
    };
    setUserData([userDetails]);
  };

  const getInterest = (obj) => {
    setUserInterest([obj]);
  };

  const value = {
    user: userData,
    isLoading: true,
    getUser: getUser,
    interest: userInterest,
    getInterest: getInterest,
  };

  console.log(userData);
  return <Auth.Provider value={value}>{props.children}</Auth.Provider>;
};

export default AuthProvider;
