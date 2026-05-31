import { useContext } from "react";
import Button from "../UI/Button/Button";
import style from "./Cart.module.css";
import CartList from "./CartList";
// import AuthContext from "../../Context/AuthContextProvider";
import APIcontext from "../../Context/APIcontext";
const Cart = (props) => {
  // import the direct data from useContext Hooks-->
  const cartData = useContext(APIcontext);

  // assigned the jsx code to a variable-->
  const cartList = cartData.cartData.map((el) => (
    <CartList
      key={Math.random().toString()}
      title={el.title}
      amount={el.amount}
      quantity={el.quantity}
    />
  ));

  // if cartdata is having some value then give data to CARDLIST comp as props if not having data then cart is empty-->
  return (
    <div className={style.cart}>
      {cartData.cartData.length ? (
        cartList
      ) : (
        <p className={style.empty}>Cart is Empty</p>
      )}

      {/* total amount--> here we use reduce value. array has object, we multiply only amount and quantity of an obj */}
      <div className={style.total__amount}>
        <p>Total Amount</p>
        <p>
          {cartData.cartData.reduce((acc, el) => {
            return acc + +el.amount * +el.quantity;
          }, 0)}
          ₹
        </p>
      </div>

      {/* BUTTON */}
      <div className={style.btn__box}>
        <Button title="Close" onClick={props.onClick} />
        {cartData.cartData.length ? (
          <Button title="Order" onClick={cartData.order} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
