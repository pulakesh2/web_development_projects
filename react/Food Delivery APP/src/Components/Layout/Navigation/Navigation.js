import { useState, useContext } from "react";
import Button from "../../UI/Button/Button";
import style from "./Navigation.module.css";
import Cart from "../../Cart/Cart";
import ReactDOM from "react-dom";
// import AuthContext from "../../../Context/AuthContextProvider";
import APIcontext from "../../../Context/APIcontext";

const Navigation = () => {
  // use Context Hooks-->
  const cartData = useContext(APIcontext);

  // State Manage-->
  const [isValid, setIsValid] = useState(false);

  // showCart function-->
  const showCartHandler = () => {
    setIsValid(true);
  };

  // closeCart Function-->
  const closeCartHandler = () => {
    setIsValid(false);
  };

  return (
    <nav className={style.nav}>
      <p className={style.logo}>bbq Heaven</p>
      {!isValid ? (
        // here length we use to show how many user add to the cart-->
        <Button
          items={cartData.cartData.length ? cartData.cartData.length : ""}
          onClick={showCartHandler}
          title="Your Cart"
        />
      ) : (
        // here we use portal so that we can assigned cart div to another div which has id cart ( it is bad practice if we assigned in navigation (HTML bad) )
        ReactDOM.createPortal(
          <Cart onClick={closeCartHandler} />,
          document.getElementById("cart")
        )
      )}
    </nav>
  );
};

export default Navigation;
