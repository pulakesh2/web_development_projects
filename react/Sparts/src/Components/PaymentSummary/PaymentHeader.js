import React, { useState } from "react";
import style from "./PaymentHeader.module.scss";

const PaymentHeader = (props) => {
  const [select, setSelect] = useState("Last 30 Days");
  const selectHandler = (e) => {
    setSelect(e.target.value);
    props.retrieveVal(select);
    console.log("-->payment", select);
  };
  return (
    <div className={style.payment__summary}>
      <p className={style.payment__summary__para}>FEE PAYMENT SUMMARY</p>
      <select onChange={selectHandler} name="fee__payments" value={select}>
        <option value="Last 30 Days">Last 30 Days</option>
        <option value="Last 15 Days">Last 15 Days</option>
        <option value="Last Week">Last Week</option>
      </select>
    </div>
  );
};

export default PaymentHeader;
