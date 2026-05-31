import React from "react";
import style from "./ScheduleCart.module.scss";

const ScheduleCart = (props) => {
  return (
    <li className={style.schedule__box}>
      <input type="checkbox" />
      <p className={style.schedule__box__user}>{props.data.user}</p>
      <p className={style.schedule__box__date}>{props.data.date}</p>
      <p className={style.schedule__box__time}>{props.data.time}</p>
      <p className={style.schedule__box__schedule}>{props.data.schedule}</p>
      <p className={style.schedule__box__member}>{props.data.members}</p>
      <a
        href="https://pulakesh.netlify.app"
        className={style.schedule__box__btn}
      >
        View
      </a>
    </li>
  );
};

export default ScheduleCart;
