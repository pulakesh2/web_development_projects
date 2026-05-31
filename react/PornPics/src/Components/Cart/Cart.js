import { Link } from "react-router-dom";
import style from "./Cart.module.css";

const Cart = (props) => {
  return (
    <li>
      <Link
        to={props.title}
        href="https://daisyui.com/components/loading/"
        className={style.image__box}
      >
        <img src={props.image} alt="" className={style.image} />
      </Link>
    </li>
  );
};

export default Cart;
