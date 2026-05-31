import React from "react";

// Declaration of the global extract data--->
const APIcontext = React.createContext({
  cartData: [],
  extractData: () => {},
  order: () => {},
});

export default APIcontext;
