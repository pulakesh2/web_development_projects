import React from "react";
import style from "./../PaymentSummary/PaymentHeader.module.scss";

const GrowthHeader = () => {
  return (
    <div className={style.payment__summary}>
      <p className={style.payment__summary__para}>MONTH-ON-MONTH GROWTH</p>
      <select name="fee__payments">
        <option value="Last 3 Month">Last 3 Month</option>
        <option value="Last 2 Month">Last 2 Month</option>
        <option value="Last Month">Last Month</option>
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class={style.download}
      >
        <path
          fill-rule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
};

export default GrowthHeader;
