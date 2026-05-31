import React from "react";

const CartContext = React.createContext({
  imageData: [],
  addImage: () => {},
});

export default CartContext;
