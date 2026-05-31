import React from "react";
import style from "./Add.module.scss";

const Add = () => {
  return (
    <div className={style.btn__layout}>
      <p>QUICK ACTION</p>
      <div className={style.button__box}>
        <button className={style.button__box__btn}>+Add new students</button>
        <button className={style.button__box__btn}> Collect Fees</button>
        <button className={style.button__box__btn}>+Add new enquiry</button>
      </div>
    </div>
  );
};

export default Add;
