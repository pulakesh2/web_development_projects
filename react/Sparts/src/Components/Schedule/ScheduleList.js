import React from "react";
import ScheduleCart from "./ScheduleCart";
import style from "./ScheduleCart.module.scss";

const ScheduleList = (props) => {
  const scheduleDataList = props.tabData.length
    ? props.tabData.map((obj) => (
        <ScheduleCart key={Math.random().toString()} data={obj} />
      ))
    : "Nothing in that list";
  return <ul className={style.scheduleList}>{scheduleDataList}</ul>;
};

export default ScheduleList;

//

//

//

//

//

//
// if (props.tabData === "All") {
//   scheduleData = allData;
// } else if (props.tabData === "classes") {
//   scheduleData = classData;
// }

// const scheduleList = scheduleData.length
//   ? scheduleData.map((obj) => (
//       <ScheduleCart key={Math.random().toString()} data={obj} />
//     ))
//   : "Nothing in that list";
