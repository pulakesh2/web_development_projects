import React from "react";
import style from "./../Cart/Cart.module.css";
const DetailsImg = (props) => {
  return (
    <li className={style.image__box}>
      <img src={props.image} alt="" className={style.image} />
    </li>
  );
};

export default DetailsImg;
