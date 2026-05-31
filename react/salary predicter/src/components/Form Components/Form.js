import React, { useState } from "react";
import style from "./Form.module.css";

const Form = (props) => {
  // Declare some variable-->
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  //   fetch user Value-->
  const fetchDataHandler = (event) => {
    event.preventDefault();
    if (name.trim().length && salary.trim().length) {
      props.extract(name, salary);
    }
  };

  //   fetch user Name-->
  const fetchNameHandler = (event) => {
    setName(event.target.value.toUpperCase());
  };

  //   fetch user Salary-->
  const fetchSalaryHandler = (event) => {
    setSalary(event.target.value);
  };

  //   JSX Code-->
  return (
    <div>
      <form onSubmit={fetchDataHandler} className={style.form}>
        <div className={`name ${style.form__box}`}>
          <label for="user__name">Your Name:</label>
          <input
            type="text"
            placeholder="Enter your Name"
            onChange={fetchNameHandler}
            id="user__name"
          />
        </div>
        <div className={`salary ${style.form__box}`}>
          <label for="user__salary">Salary:</label>
          <input
            type="text"
            placeholder="Enter your Annual Income"
            onChange={fetchSalaryHandler}
            id="user__salary"
          />
        </div>

        <button
          type="submit"
          className={` ${!name || !salary ? style.invalid : ""}`}
        >
          Calculate Your Monthly Income
        </button>
        <button onClick={props.closeInputBox}>Cancel</button>
      </form>
    </div>
  );
};

export default Form;
