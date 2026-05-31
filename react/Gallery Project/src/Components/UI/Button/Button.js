import { Link } from "react-router-dom";
import style from "./Button.module.css";

const Button = () => {
  return (
    <Link to="/">
      <button className={style.btn}>&larr;</button>
    </Link>
  );
};

export default Button;
