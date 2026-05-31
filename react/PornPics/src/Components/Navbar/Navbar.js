import { useRef } from "react";
import style from "./Navbar.module.css";

const Navbar = (props) => {
  const userInput = useRef();
  const submitHandler = () => {
    props.getUserData(userInput.current.value);
  };

  return (
    <div className={`navbar bg-base-100 ${style.navbar}`}>
      <div className="flex-1">
        <h1 className={`btn btn-ghost normal-case text-xl ${style.logo}`}>
          OnlyPics📸
        </h1>
      </div>
      <div className={`flex-none gap-2 ${style.search__box}`}>
        <div className={`form-control ${style.search}`}>
          <input
            type="text"
            placeholder="Enter any pornstar Name"
            className="input input-bordered w-24 md:w-auto"
            ref={userInput}
          />
        </div>
        <button onClick={submitHandler} className="btn btn-outline btn-success">
          search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
