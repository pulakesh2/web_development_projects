import React from "react";
import BarChart from "../PaymentSummary/BarChart";
import style from "./Chart.module.scss";

const Charts = () => {
  const revenue = {
    label: ["Jun'23", "Jul'23", "Aug'23"],
    type: "FEE RECIEVED",
    color: "#ffe066",
  };
  const students = {
    label: ["Jun'23", "Jul'23", "Aug'23"],
    type: "ACTIVE STUDENTS",
    color: "#69db7c",
  };
  return (
    <div className={style.bar__charts}>
      <BarChart data={revenue} />
      <BarChart data={students} />
    </div>
  );
};

export default Charts;
