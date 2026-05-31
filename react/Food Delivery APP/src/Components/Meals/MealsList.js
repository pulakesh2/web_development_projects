import { useContext, useRef } from "react";
import Button from "../UI/Button/Button";
import style from "./MealsList.module.css";
// import AuthContext from "../../Context/AuthContextProvider";
import APIcontext from "../../Context/APIcontext";

const MealsList = (props) => {
  // use Ref to get the data-->
  const mealQuantity = useRef();

  // use our context API--> to access the function and assigne data to the cartData
  const ctx = useContext(APIcontext);

  // addToCart function--> get value from div and input and pass value to the cartData using extractData from context API-->
  const addToCart = () => {
    const mealName = props.mealTitle;
    const mealPrice = props.mealAmount;
    const mealItem = +mealQuantity.current.value;
    if (mealItem) {
      ctx.extractData(mealName, mealPrice, mealItem);
    }
  };

  // JSX Code-->
  return (
    <div className={style.meal__list}>
      <div className={style.meal__desc}>
        <p className={style.title}>{props.mealTitle}</p>
        <p className={style.desc}>{props.mealDesc}</p>
        <p className={style.amount}>{props.mealAmount}₹</p>
      </div>
      <div className={style.meal__add}>
        <div className={style.add__item}>
          <label htmlFor="quantity">Amount</label>
          <input
            type="number"
            min="1"
            max="6"
            id="quantity"
            ref={mealQuantity}
            defaultValue={1}
          />
        </div>
        <Button title="+ Add" onClick={addToCart} />
      </div>
    </div>
  );
};

export default MealsList;
