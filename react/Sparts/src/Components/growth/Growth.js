import React from "react";
import GrowthHeader from "./GrowthHeader";
import style from "./Growth.module.scss";
import { Chart } from "chart.js";
import Charts from "./Charts";

const Growth = () => {
  return (
    <div className={style.growth}>
      <GrowthHeader />
      <Charts />
    </div>
  );
};

export default Growth;
