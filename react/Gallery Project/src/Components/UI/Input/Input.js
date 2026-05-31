import { useContext, useRef } from "react";
import style from "./Input.module.css";
import APIContext from "../../../Store/APIContext";

const Input = () => {
  // get context API-->
  const apiData = useContext(APIContext);

  //   manage State-->
  const userInput = useRef();
  //   const inputData = userInput.current.value;

  //   onCLick Function-->
  const getDataHandler = () => {
    apiData.getData(userInput.current.value);
  };

  //   JSX CODE-->
  return (
    <div className={style.input__form}>
      <input
        type="text"
        placeholder="Search"
        className={style.search__bar}
        ref={userInput}
      />
      <button className={style.btn} onClick={getDataHandler}>
        Search
      </button>
    </div>
  );
};

export default Input;
