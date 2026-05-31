import React, { useState } from "react";
import PaymentHeader from "./PaymentHeader";
import PaymentFooter from "./PaymentFooter";
import style from "./PaymentSummary.module.scss";
import PieChart from "./PieChart";

const PaymentSummary = () => {
  const [selectVar, setSelectVar] = useState("");
  const retrieveVal = (val) => {
    setSelectVar(val);
    console.log("-->pie", selectVar);
  };
  return (
    <div className={style.payment__summary}>
      <PaymentHeader retrieveVal={retrieveVal} />
      <PieChart data={selectVar} />
      <PaymentFooter />
    </div>
  );
};

export default PaymentSummary;
