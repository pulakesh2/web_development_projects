import React, { useState } from "react";
import CartContext from "./UseContext";

const ContextProvider = (props) => {
  const [imageData, setImageData] = useState([]);
  const addImage = (value) => {
    setImageData(value);
  };

  const provider = {
    imageData,
    addImage,
  };
  return (
    <CartContext.Provider value={provider}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
