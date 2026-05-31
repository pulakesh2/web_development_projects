import React from "react";

const Auth = React.createContext({
  user: null,
  isLoading: false,
  interest: [],
  movieData: "",
  getInterest: () => {},
  getUser: () => {},
});

export default Auth;
