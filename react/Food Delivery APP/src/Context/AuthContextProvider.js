import React, { useState } from "react";
import APIcontext from "./APIcontext";

// Our App System Management-->

// We build it so that every component directly access the data-->
export const AuthContextProvider = (props) => {
  // State Management-->
  const [cartData, setCartData] = useState([]);

  // Order Function-->
  const order = () => {
    console.log("ordering.......");
  };

  // Extract data function--> it will take three para and asigned to the newData and state is updated
  const extractData = (meal, amount, quantity) => {
    const newData = {
      title: meal,
      amount: amount,
      quantity: quantity,
    };
    setCartData([newData, ...cartData]);
  };

  // intialize the value-->
  const ApiIntialize = {
    cartData: cartData,
    extractData: extractData,
    order: order,
  };

  // we assigne our global data to this fn and data-->
  return (
    <APIcontext.Provider value={ApiIntialize}>
      {props.children}
    </APIcontext.Provider>
  );
};
export default AuthContextProvider;
