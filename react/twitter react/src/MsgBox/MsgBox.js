import { Fragment } from "react";
import style from "./MsgBox.module.css";

const MsgBox = () => {
  return (
    <Fragment>
      <h2 className={style.h2}>
        Your tweet is successfully send to the database...( Please Reload the
        Tweet )
      </h2>
    </Fragment>
  );
};

export default MsgBox;
