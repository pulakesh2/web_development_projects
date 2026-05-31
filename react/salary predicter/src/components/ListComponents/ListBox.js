import React from "react";
import List from "./List";
import style from "./ListBox.module.css";

const ListBox = (props) => {
  // return the whole list by using arra map method-->
  return (
    <div className={style.list__box}>
      {props.userData.length === 0 ? (
        <p>The list is Empty</p>
      ) : (
        props.userData.map((data) => {
          return <List key={data.key} name={data.name} salary={data.salary} />;
        })
      )}

      {/* {props.userData.map((data) => {
        return <List key={data.key} name={data.name} salary={data.salary} />;
      })} */}
    </div>
  );
};

export default ListBox;
