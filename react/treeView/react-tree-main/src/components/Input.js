import React, { useState } from "react";
import  "../styles/Input.css";

const Input = (props) => {
  const [input, setInput] = useState("");

  const searchHandler = () => {
    props.getInput(input);
  };
  return (
    <div className="input__box">
      {/* <label htmlFor="input">search</label> */}
      <input
        type="text"
        id="input"
        className="Input"
        onChange={(e) => setInput(e.target.value)}
        placeholder="search"
      />
      <button className="btn" onClick={searchHandler}>
        search
      </button>
    </div>
  );
};

export default Input;
