import React from "react";
import style from "./CartList.module.css";

const CartList = (props) => {
  // CARD Component-->
  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <div className={style.quantity__box}>
        <p className={style.amount}>{props.amount}₹</p>
        <p className={style.quantity}>X {props.quantity}</p>
      </div>
      <hr className={style.line}></hr>
    </React.Fragment>
  );
};

export default CartList;
