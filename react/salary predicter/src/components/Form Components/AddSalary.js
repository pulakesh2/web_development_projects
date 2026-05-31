import React from "react";

const AddSalary = (props) => {
  return (
    <div>
      <button onClick={props.openInputBox}>Calculate Salary</button>
    </div>
  );
};

export default AddSalary;
