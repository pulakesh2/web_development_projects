import React from "react";
import style from "./Students.module.scss";

const Students = () => {
  return (
    <table className={style.student__active}>
      <thead className={style.student__active__head}>
        <th>ACTIVE STUDENTS</th>
        <th>ACTIVE COACHES</th>
      </thead>
      <tbody className={style.student__active__body}>
        <tr>
          <td>5,000</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Students;
