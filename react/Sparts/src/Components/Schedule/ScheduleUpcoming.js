import React from "react";
import style from "./ScheduleUpcoming.module.scss";
// import "./ScheduleUpcoming.module.scss";
const ScheduleUpcoming = (props) => {
  // const dataTab = useRef();

  const getTabHandler = (e) => {
    // console.log(dataTab.current);
    props.getTabData(e.target.innerText);
    console.log(e.target.parentNode.children);
    // e.target.parentNode
    for (const btn of e.target.parentNode.children) {
      btn.classList.remove(`${style.active}`);
      // console.log(btn);
    }
    e.target.classList.toggle(`${style.active}`);
  };

  return (
    <div className={style.upcoming}>
      <p>UPCOMING SCHEDULE</p>
      <div className={style.upcoming__btn_box}>
        <button
          className={`${style.upcoming__btn} ${style.active}`}
          onClick={getTabHandler}
        >
          All
        </button>
        <button className={style.upcoming__btn} onClick={getTabHandler}>
          Classes
        </button>
        <button className={style.upcoming__btn} onClick={getTabHandler}>
          Meetings
        </button>
        <button className={style.upcoming__btn} onClick={getTabHandler}>
          Events
        </button>
      </div>
      <strong>...</strong>
    </div>
  );
};

export default ScheduleUpcoming;
