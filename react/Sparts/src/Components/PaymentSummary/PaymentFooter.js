import React from "react";
import style from "./PaymentFooter.module.scss";

const PaymentFooter = () => {
  return (
    <div className={style.amount}>
      <div className={style.amount__received__box}>
        <p className={style.amount__details}>
          <p className={style.log}></p>
          AMOUNT RECEIVED
        </p>
        <p>
          <strong className={style.amount__fees}>624,000</strong> by 400
          students
        </p>
      </div>
      <div className={style.amount__pending__box}>
        <p className={style.amount__details}>
          <p className={style.log}></p>
          AMOUNT PENDING
        </p>
        <p>
          <strong className={style.amount__fees}>334,000</strong> by 123
          students
        </p>
      </div>
    </div>
  );
};

export default PaymentFooter;
