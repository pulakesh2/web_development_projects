import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  logOutHandler: () => {},
  loginHandler: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  // Managing State-->
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // USE EFFECT-->
  useEffect(() => {
    const userLogedInInformation = localStorage.getItem("isLoggedIn");
    if (userLogedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  // Login Handler-->
  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  // LogOutHandler-->
  const logOutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        loginHandler: loginHandler,
        logOutHandler: logOutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
