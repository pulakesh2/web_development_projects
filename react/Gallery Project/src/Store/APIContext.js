import React from "react";

//  Api BluePrint-->
const APIContext = React.createContext({
  userData: "",
  pageData: "",
  pageDataFn: (obj) => {},
  getData: (value) => {},
});

export default APIContext;
