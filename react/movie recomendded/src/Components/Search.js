import React, { useRef } from "react";
import style from "./Search.module.css";

const Search = (props) => {
  const input = useRef();
  const getInputDataHandler = () => {
    props.getInput(input.current.value);
    input.current.value = "";
  };
  return (
    <div className={style.search__box}>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-error w-full max-w-xs"
        ref={input}
      />
      <button
        className="btn btn-outline btn-error"
        onClick={getInputDataHandler}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
