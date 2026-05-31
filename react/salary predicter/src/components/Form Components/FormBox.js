import AddSalary from "./AddSalary";
import Form from "./Form";
import style from "./FormBox.module.css";
import React, { useState } from "react";

const FormBox = (props) => {
  // form box open and close-->
  const [isValid, setIsValid] = useState(false);

  const startEditing = () => {
    setIsValid(true);
  };

  const stopEditing = () => {
    setIsValid(false);
  };

  return (
    <div className={style.form__box}>
      {!isValid ? (
        <AddSalary openInputBox={startEditing} />
      ) : (
        <Form extract={props.addNewData} closeInputBox={stopEditing} />
      )}
      {/* <Form extract={props.addNewData} /> */}
    </div>
  );
};

export default FormBox;
