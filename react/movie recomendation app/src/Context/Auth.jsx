// we intialize the default value to the contextAPI-->
import React from "react";
export const AuthContext = React.createContext({
  user: "hello",
  isLoading: false,
});
